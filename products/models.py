from django.db import models
from authentication.models import User
# Create your models here.



class Product(models.Model):
    name = models.CharField(max_length=100)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    free = models.BooleanField(default=False)
    description = models.CharField(max_length=250, null=True, blank=True)
    added_date = models.DateTimeField(auto_now_add=True) 
    image = models.ManyToManyField('ProductImage')
    category = models.ForeignKey(
        'Category',
        related_name='products',
        on_delete=models.CASCADE
    )

    def __str__(self):
        return f'{self.name}'

class ProductImage(models.Model):
    image = models.ImageField(upload_to='product_images/')
    alt_text = models.CharField(max_length=255, blank=True) 

class Category(models.Model):
    name = models.CharField(max_length=100)
    
    def __str__(self):
        return f'{self.name}'

class Company(models.Model):
    name = models.DateTimeField(auto_now_add=True) 
    products = models.ManyToManyField(Product)
    
    def __str__(self):
        return f'{self.id}'

class Order(models.Model):
    user = models.ForeignKey(User, blank=True, null=True,  on_delete=models.CASCADE)
    product_shop_id = models.ManyToManyField('product_shop')
    numItemsInCart = models.PositiveIntegerField(default='0')
    cartTotal = models.DecimalField(max_digits = 10 , decimal_places = 2, null = True, blank = True)
    date = models.DateTimeField(auto_now = True)
    
    def __str__(self):
        return f'order_id : {self.id} '

class product_shop(models.Model):
    product_id = models.ForeignKey(Product, on_delete=models.CASCADE , related_name="products")
    Order_id = models.ForeignKey(Order, on_delete=models.CASCADE, related_name="order_id") 
    quantity = models.PositiveIntegerField(default='0')

    def __str__(self):
        return f'{self.id}'