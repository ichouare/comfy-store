from django.db import models
# Create your models here.
from django.contrib.auth.models import AbstractUser , PermissionsMixin
from django.db import models
from .managers import UserManager
from django.contrib.auth.models import Group, Permission
# from store.models import Order

class User(AbstractUser, PermissionsMixin):
    email = models.EmailField(max_length=200, unique=True)
    adress = models.CharField(max_length=200)
    # objects = UserManager()

    def __str__(self):
        return f'{self.username}'


