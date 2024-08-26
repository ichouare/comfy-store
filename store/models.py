# from django.db import models
# from authentication.models import User
# # Create your models here.



# class Product(models.Model):
#     name = models.CharField(max_length=100)
#     price = models.DecimalField(max_digits=10, decimal_places=2)
#     free = models.BooleanField(default=False)
#     description = models.CharField(max_length=250, null=True, blank=True)
#     added_date = models.DateTimeField(auto_now_add=True) 

#     category = models.ForeignKey(
#         'Category',
#         related_name='products',
#         on_delete=models.CASCADE
#     )

# class ProductImage(models.Model):
#     product = models.ForeignKey(Product, related_name='images', on_delete=models.CASCADE)
#     image = models.ImageField(upload_to='product_images/')
#     alt_text = models.CharField(max_length=255, blank=True) 

# class Category(models.Model):
#     name = models.CharField(max_length=100)
    
#     def __str__(self):
#         return self.name

# class Company(models.Model):
#     name = models.DateTimeField(auto_now_add=True) 
#     products = models.ManyToManyField(Product)
    
#     def __str__(self):
#         return f'{self.id}'

# class Order(models.Model):
#     user = models.ForeignKey(User, blank=True, null=True,  on_delete=models.PROTECT)
#     date = models.CharField(max_length=100)
    
#     def __str__(self):
#         return self.name

# class product_shop(models.Model):
#     product_id = models.ForeignKey(Product, on_delete=models.CASCADE , related_name="products")
#     Order_id = models.ForeignKey(Order, on_delete=models.CASCADE, related_name="order_id") 
#     quantity = models.IntegerField()

#     def __str__(self):
#         return f'{self.id}'
