from django.urls import path
from . import views 


# TODO : view for cart 
# TODO : view for all products with filter 
# TODO : view for single product 
urlpatterns = [
    path('cart/', views.cart ),
    path('products/', views.all_products ),
    path('products/<int:id>', views.single_product ),

]