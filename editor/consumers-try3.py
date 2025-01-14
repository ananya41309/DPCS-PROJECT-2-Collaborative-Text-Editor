import json
from channels.generic.websocket import AsyncWebsocketConsumer
from channels.db import database_sync_to_async
import logging

logger = logging.getLogger(__name__)

class EditorConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        """Handle WebSocket connection."""
        from .models import Document
        self.is_closed = False

        try:
            self.doc_id = self.scope['url_route']['kwargs']['doc_id']
            self.room_group_name = f'document_{self.doc_id}'

            # Check user's permission level
            self.user_permission = await self.get_user_permission(self.scope['user'], self.doc_id)

            if not self.user_permission:
                logger.warning(f"User {self.scope['user']} does not have permission for document {self.doc_id}")
                await self.close()
                return

            # Add the WebSocket connection to the group
            await self.channel_layer.group_add(self.room_group_name, self.channel_name)
            await self.accept()

            # Fetch initial content and send to the client
            initial_content = await self.get_document_content(self.doc_id)
            if initial_content is not None:
                await self.send(text_data=json.dumps({"type": "content", "content": initial_content}))
            else:
                logger.warning(f"Document {self.doc_id} content is None.")

            logger.info(f"WebSocket connected for document {self.doc_id} by user {self.scope['user']}")

        except Exception as e:
            logger.error(f"Error during WebSocket connection for document {self.doc_id}: {e}")
            await self.close()

    async def disconnect(self, close_code):
        """Handle WebSocket disconnection."""
        self.is_closed = True
        try:
            await self.channel_layer.group_discard(self.room_group_name, self.channel_name)
            logger.info(f"WebSocket disconnected for document {self.doc_id}")
        except Exception as e:
            logger.error(f"Error during WebSocket disconnection for document {self.doc_id}: {e}")

    async def receive(self, text_data):
        data = json.loads(text_data)
        
        if data["type"] == "save_content":
            content = json.loads(data["content"])  # Extract the content from the WebSocket message
            
            # Save content in the database
            document = await self.save_document_content(self.doc_id, content)
            
            # Save a snapshot of the document
            await self.save_document_snapshot(document, content)
            
            # Optionally, send a confirmation back to the client
            await self.send(text_data=json.dumps({
                "status": "success",
                "message": "Content saved successfully"
            }))

    async def websocket_receive(self, event):
        data = json.loads(event["text"])
        if data["type"] == "save_content":
            content = json.loads(data["content"])
            # Save to the database
            document = await sync_to_async(Document.objects.get)(id=self.scope["url_route"]["kwargs"]["doc_id"])
            document.content = content
            await sync_to_async(document.save)()


    @database_sync_to_async
    def save_document_content(self, doc_id, content):
        # Get the document and update its content
        document = Document.objects.get(id=doc_id)
        document.content = content
        document.save()
        return document

    @database_sync_to_async
    def save_document_snapshot(self, document, content):
        # Save a new version (snapshot) of the document
        DocumentVersion.objects.create(
            document=document,
            version_content=content
        )

    async def document_update(self, event):
        """Send updated document content to WebSocket clients."""
        content = event.get('content')
        try:
            # Ensure the connection is still open before sending
            if not self.is_closed and self.scope['type'] == 'websocket':
                await self.send(text_data=json.dumps({'type': 'content', 'content': content}))
        except RuntimeError as e:
            logger.error(f"Error sending WebSocket message for document {self.doc_id}: {e}")

    async def comment_update(self, event):
        """Send new comment to WebSocket clients."""
        comment = event.get("comment")
        try:
            # Ensure the connection is still open before sending
            if not self.is_closed and self.scope['type'] == 'websocket':
                await self.send(text_data=json.dumps({"type": "comment", "comment": comment}))
        except RuntimeError as e:
            logger.error(f"Error sending comment update for document {self.doc_id}: {e}")

    @database_sync_to_async
    def get_user_permission(self, user, doc_id):
        """Get the user's permission level for the document."""
        from .models import Document, DocumentPermission
        try:
            document = Document.objects.get(id=doc_id)
            if user == document.owner:
                return "edit"
            permission = DocumentPermission.objects.get(user=user, document=document)
            return permission.access_level
        except Document.DoesNotExist:
            logger.error(f"Document with ID {doc_id} does not exist.")
            return None
        except DocumentPermission.DoesNotExist:
            logger.warning(f"Permission not found for user {user.username} on document {doc_id}.")
            return None

    @database_sync_to_async
    def get_document_content(self, doc_id):
        """Fetch the content of the document."""
        from .models import Document
        try:
            document = Document.objects.get(pk=doc_id)
            return document.content
        except Document.DoesNotExist:
            logger.error(f"Document with ID {doc_id} does not exist.")
            return None

    async def broadcast_document_update(self, content):
        """Broadcast document content updates to all WebSocket clients."""
        try:
            await self.save_document_content(self.doc_id, content)
            await self.channel_layer.group_send(
                self.room_group_name,
                {"type": "document_update", "content": content}
            )
        except Exception as e:
            logger.error(f"Failed to broadcast document update for document {self.doc_id}: {e}")

    async def broadcast_comment(self, comment):
        """Broadcast new comments to all WebSocket clients."""
        try:
            await self.channel_layer.group_send(
                self.room_group_name,
                {"type": "comment_update", "comment": comment}
            )
        except Exception as e:
            logger.error(f"Failed to broadcast comment for document {self.doc_id}: {e}")

    async def send_safe(self, data):
        """Send data safely if the WebSocket is open."""
        if not self.is_closed:
            try:
                await self.send(data)
            except RuntimeError as e:
                logger.error(f"WebSocket send error: {e}")

    
