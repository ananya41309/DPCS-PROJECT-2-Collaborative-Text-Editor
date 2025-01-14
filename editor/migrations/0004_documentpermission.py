from django.db import migrations, models

class Migration(migrations.Migration):

    dependencies = [
        ('editor', '0003_remove_document_created_at_and_more'),  # Adjust this to the previous migration
    ]

    operations = [
        migrations.CreateModel(
            name='DocumentPermission',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('access_level', models.CharField(choices=[('read', 'Read'), ('edit', 'Edit'), ('comment', 'Comment')], max_length=10)),
                ('user', models.ForeignKey(on_delete=models.CASCADE, to='auth.User')),
                ('document', models.ForeignKey(on_delete=models.CASCADE, to='editor.Document')),
            ],
        ),
    ]
