from django.db import models
# Create your models here.
from django.contrib.auth.models import AbstractUser
from django.db import models
from .managers import CustomUserManager
from django.contrib.auth.models import Group, Permission
# from store.models import Order

class CustomUser(AbstractUser):
    email = models.EmailField(max_length=200, unique=True)
    adress = models.CharField(max_length=200)
    # objects = CustomUserManager()

    def __str__(self):
        return f'{self.id}'


