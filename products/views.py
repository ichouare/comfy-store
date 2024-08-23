from django.shortcuts import render
from .serializers import productsSerialzer, CategorySerialzer
# Create your views here.
from django.shortcuts import render 
from rest_framework.response import Response
# Create your views here.
from rest_framework.decorators import api_view
from rest_framework import generics
from .models import Product, Category
from rest_framework.permissions import IsAuthenticated

@api_view(['GET'])
def cart(request, *args, **kwargs):
    return Response("cart view")


# @api_view(['GET', 'POST'])
class all_products(generics.ListAPIView):
    permission_classes = [IsAuthenticated]
    # queryset = Product.objects.all()
    serializer_class = productsSerialzer

    def list(self, request):  # overide the  list method inherited from ListModelMixin
        # print( request.query_params.get('category'))
        queryset = self.get_queryset()
        serializer = productsSerialzer(queryset, many=True, context={'request': request})
        return Response(serializer.data)


    def get_queryset(self):
        print(self.request.query_params)
        filters = {}  # Use 'filters' instead of 'filter'

        
        if self.request.query_params.get('price'):
            filters['price'] = self.request.query_params.get('price')
        if self.request.query_params.get('free') == 'true':
            filters['free'] = True
        if self.request.query_params.get('name'):
            filters['name'] = self.request.query_params.get('name')

        order = self.request.query_params.get('sort')
        if self.request.query_params.get('category') != 'all':
            category = self.request.query_params.get('category')
            products = Product.objects.filter(**filters).filter(category__name = category)
        else: 
            products = Product.objects.all()

        # You can also apply ordering if needed
        if order != '':
            if order == 'a-z':
                products = products.order_by('name')
            elif order == "high":
                  products = products.order_by('price')
            else: 
                product =  products.order_by('-price')




        return products

    def get_serializer_class(self):  # overide get_queryset method inherited from GenericAPIView
        return productsSerialzer


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
            serializer = productsSerialzer(product, context={ 'request': request})

            return Response(serializer.data, status=200)
        except Product.DoesNotExist:
            return Response("Product not found", status=400)


@api_view(['GET'])

def get_categorys(request):
    if request.method == 'GET':
        try:
            categories = Category.objects.all()
            serializer = CategorySerialzer(categories, many=True)

            return Response(serializer.data, status=200)
        except Category.DoesNotExist:
            return Response("Category not found", status=400)