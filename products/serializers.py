from rest_framework import serializers
from .models import Product , Category, ProductImage, Order, product_shop
from authentication.serializers import UserSerializer

class ProductImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductImage
        fields = ['image', 'alt_text']


class productsSerialzer(serializers.ModelSerializer):
    image = ProductImageSerializer(many=True)
    class Meta:
        model = Product
        fields = '__all__'

class CategorySerialzer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['name']

class productShopSerializer(serializers.ModelSerializer):
    product_id = productsSerialzer()
    class Meta:
        model = product_shop
        fields = ['product_id', 'quantity']


class OrderSerialzer(serializers.ModelSerializer):
    user = UserSerializer()
    product_shop_id = productShopSerializer(many=True)
    class Meta:
        model = Order
        fields = '__all__'
    def to_representation(self, obj):
        primitive_repr = super(OrderSerialzer, self).to_representation(obj)
        primitive_repr['cartItems'] = primitive_repr['product_shop_id']
        return primitive_repr 