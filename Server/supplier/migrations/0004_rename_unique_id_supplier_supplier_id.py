# Generated by Django 5.1.1 on 2024-09-16 06:10

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('supplier', '0003_alter_supplier_website'),
    ]

    operations = [
        migrations.RenameField(
            model_name='supplier',
            old_name='unique_id',
            new_name='supplier_id',
        ),
    ]
