from django.db import models
from authentication.models import  CustomUser
# Create your models here.



class Product(models.Model):
    name = models.CharField(max_length=100)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    free = models.BooleanField(default=False, null=True)
    image = models.ImageField(upload_to='upload/', default='')
    description = models.CharField(max_length=250, null=True, blank=True)
    added_date = models.DateTimeField(auto_now_add=True) 

    category = models.ForeignKey(
        'category',
        related_name='product_category',
        on_delete=models.CASCADE
    )


    def __str__(self):
        return self.name

class Category(models.Model):
    name = models.CharField(max_length=100)
    
    def __str__(self):
        return self.name

class Company(models.Model):
    name = models.DateTimeField(auto_now_add=True) 
    products = models.ManyToManyField(Product)
    
    def __str__(self):
        return f'{self.id}'


class Order(models.Model):
    User_id = models.ForeignKey(CustomUser, blank=True, null=True,  on_delete=models.PROTECT)
    name = models.CharField(max_length=250)
    date = models.CharField(max_length=100)
    
    def __str__(self):
        return self.name