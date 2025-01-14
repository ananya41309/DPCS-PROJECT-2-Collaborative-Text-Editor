from django.urls import path
from . import consumers
from editor import consumers
from django.urls import re_path

websocket_urlpatterns = [
    re_path(r'ws/document/(?P<doc_id>\d+)/$', consumers.EditorConsumer.as_asgi()),
]
