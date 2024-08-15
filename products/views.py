from django.shortcuts import render
from .serializers import productsSerialzer
# Create your views here.
from django.shortcuts import render 
from rest_framework.response import Response
# Create your views here.
from rest_framework.decorators import api_view
from rest_framework import generics
from .models import Product
from rest_framework.permissions import IsAuthenticated

@api_view(['GET'])
def cart(request, *args, **kwargs):
    return Response("cart view")


# @api_view(['GET', 'POST'])
class all_products(generics.ListAPIView):
    permission_classes = [IsAuthenticated]
    queryset = Product.objects.all()
    serializer_class = productsSerialzer

class fourProduct(generics.ListAPIView):
    permission_classes = [IsAuthenticated]
    queryset = Product.objects.all()[0:4]
    serializer_class = productsSerialzer


# def all_products(request, *args, **kwargs):
#     return Response("cart view")

@api_view(['GET'])

def single_product(request, id):
    if request.method == 'GET':
        try:
            product = Product.objects.get(id=id)
            serializer = productsSerialzer(product)

            return Response(serializer.data, status=200)
        except Product.DoesNotExist:
            return Response("Product not found", status=400)