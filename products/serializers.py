from rest_framework import serializers
from .models import Product , Category, ProductImage

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