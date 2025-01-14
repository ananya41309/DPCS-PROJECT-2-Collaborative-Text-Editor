# Generated by Django 4.2.16 on 2024-11-27 11:56

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ("editor", "0002_alter_document_shared_with"),
    ]

    operations = [
        migrations.RemoveField(model_name="document", name="created_at",),
        migrations.RemoveField(model_name="document", name="updated_at",),
        migrations.AlterField(
            model_name="document",
            name="owner",
            field=models.ForeignKey(
                on_delete=django.db.models.deletion.CASCADE,
                related_name="owned_documents",
                to=settings.AUTH_USER_MODEL,
            ),
        ),
        migrations.AlterField(
            model_name="document", name="title", field=models.CharField(max_length=200),
        ),
    ]
