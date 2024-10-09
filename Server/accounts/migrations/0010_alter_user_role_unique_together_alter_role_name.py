# Generated by Django 5.1.1 on 2024-10-08 09:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0009_role_user_role'),
    ]

    operations = [
        migrations.AlterUniqueTogether(
            name='user_role',
            unique_together=set(),
        ),
        migrations.AlterField(
            model_name='role',
            name='name',
            field=models.CharField(max_length=200),
        ),
    ]
