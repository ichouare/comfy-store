from django.urls import path
from . import views 


# TODO : view for cart 
# TODO : view for all products with filter 
# TODO : view for single product 
urlpatterns = [
    path('cart/', views.cart ),
    path('products/', views.all_products.as_view() ),
    path('fourProduct/', views.fourProduct.as_view() ),
    path('products/<int:id>', views.single_product ),
    path('get_all_categories', views.get_categorys ),
    path('add_product_to_cart', views.add_product_to_cart ),
    path('get_cart_of_user', views.get_cart_of_user ),
    # path('add_product_to_cart', views.remove_one_product ),
    # path('add_product_to_cart', views.remove_product_from_cart ),
]