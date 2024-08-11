from django.shortcuts import render 
from rest_framework.response import Response
# Create your views here.
from rest_framework.decorators import api_view

@api_view(['GET'])
def cart(request, *args, **kwargs):
    return Response("cart view")


@api_view(['GET', 'POST'])
def all_products(request, *args, **kwargs):
    return Response("cart view")

@api_view(['GET'])
def single_product(request, id, **kwargs):
    return Response("cart view")