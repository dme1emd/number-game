# Generated by Django 3.2.6 on 2022-10-23 18:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('lobby', '0002_alter_game_password'),
    ]

    operations = [
        migrations.AlterField(
            model_name='game',
            name='name',
            field=models.CharField(max_length=15, unique=True),
        ),
    ]
