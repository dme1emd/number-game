from email.policy import default
from django.db import models

# Create your models here.
class Game(models.Model):
    name = models.CharField(max_length =15 , unique=True)
    is_private = models.BooleanField(default = False)
    password = models.CharField(default = '' , max_length=6 ,blank = True , null = True)