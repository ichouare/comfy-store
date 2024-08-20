from rest_framework import serializers
from .models import Product , Category

class productsSerialzer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'

class CategorySerialzer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['name']