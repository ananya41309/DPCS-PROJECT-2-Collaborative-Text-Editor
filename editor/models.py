from django.db import models
from django.contrib.auth.models import User

class Document(models.Model):
    title = models.CharField(max_length=200)
    content = models.TextField()
    owner = models.ForeignKey(User, on_delete=models.CASCADE, related_name='owned_documents')
    shared_with = models.ManyToManyField(User, related_name='shared_documents', blank=True)

    def __str__(self):
        return self.title

    def save(self, *args, **kwargs):
        # If this is an update to an existing document, save a version
        if self.pk:
            original_document = Document.objects.get(pk=self.pk)
            if original_document.content != self.content:
                # Create a new version before saving changes
                DocumentVersion.objects.create(
                    document=self,
                    version_number=self.versions.count() + 1,
                    content=original_document.content,
                    modified_by=self.owner
                )
        super().save(*args, **kwargs)

class DocumentPermission(models.Model):
    READ = 'read'
    EDIT = 'edit'
    COMMENT = 'comment'

    ACCESS_LEVELS = [
        (READ, 'Read'),
        (EDIT, 'Edit'),
        (COMMENT, 'Comment'),
    ]

    user = models.ForeignKey(User, on_delete=models.CASCADE)
    document = models.ForeignKey(Document, on_delete=models.CASCADE)
    access_level = models.CharField(max_length=10, choices=ACCESS_LEVELS)

    def __str__(self):
        return f"{self.user.username} - {self.access_level} access to {self.document.title}"

class DocumentVersion(models.Model):
    document = models.ForeignKey(Document, on_delete=models.CASCADE, related_name='versions')
    version_number = models.PositiveIntegerField()
    content = models.TextField()
    crdt_metadata = models.JSONField(default=dict)
    modified_at = models.DateTimeField(auto_now_add=True)
    modified_by = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return f"Version {self.version_number} of {self.document.title}"

class Comment(models.Model):
    document = models.ForeignKey(Document, on_delete=models.CASCADE, related_name='comments')
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    content = models.TextField()
    range_start = models.IntegerField(null=True, blank=True)
    range_end = models.IntegerField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.user.username} commented on {self.document.title}"

