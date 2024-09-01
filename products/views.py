from django.shortcuts import render
from .serializers import productsSerialzer, CategorySerialzer, OrderSerialzer
# Create your views here.
from django.shortcuts import render 
from rest_framework.response import Response
# Create your views here.
from rest_framework.decorators import api_view
from rest_framework import generics
from .models import Product, Category
from rest_framework.permissions import IsAuthenticated
from .models import Order, product_shop
from rest_framework import status
from django.shortcuts import get_object_or_404

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


@api_view(['POST', 'DELETE'])

def add_product_to_cart(request):
    if request.method == 'POST':
        order, created = Order.objects.get_or_create(user= request.user, defaults={
            'user' : request.user,
            'numItemsInCart' : request.data['cart']['numItemsInCart'],
            'cartTotal' : request.data['cart']['cartTotal'],
        })
        if not created :
            order.numItemsInCart = request.data['cart']['numItemsInCart']
            order.cartTotal = request.data['cart']['cartTotal']
            order.save()

        if order:
            for item in request.data['cart']['cartItems']:
                print(item)
                id = item.get('id') 
                if id is None:
                    id = item['product_id']['id']
                prodcut =  Product.objects.get(id = id)
                productShop, created = product_shop.objects.get_or_create(Order_id = order,product_id__id = id ,  defaults={
                'product_id' : prodcut,
                'Order_id' : order,
                'quantity' : item['quantity'],
             }) 
                if not created:
                    productShop.quantity = item['quantity']
                    productShop.save()  # Ensure the object is saved after modification
                    print("Updated quantity:", productShop.quantity)
                order.product_shop_id.add(productShop)
                order.save()
           
        return Response("items add", status=200)
    if request.method == 'DELETE':
        print("data for delete it ", request.data['id'])
        order = Order.objects.get(user = request.user)
        if order :
            product_to_remove = product_shop.objects.get(Order_id = order , product_id__id = request.data['id'])
            quantity =  product_to_remove.quantity
            price =  product_to_remove.product_id.price
            order.numItemsInCart -= quantity 
            order.cartTotal -= (quantity  * price)
            order.save()
            product_to_remove.delete()
            return Response("delete porduct from cart", status=200)
        else:
            return Response("No active order found for this user.", status=status.HTTP_404_NOT_FOUND)



@api_view(['GET'])
def get_cart_of_user(request):
    try:
        # Retrieve the order for the current user
        order = get_object_or_404(Order, user=request.user)
    except Order.DoesNotExist:
        # Handle the case where the order does not exist
        return Response({"error": "No active order found for this user."}, status=status.HTTP_404_NOT_FOUND)

    # Serialize the order data
    serializer = OrderSerialzer(order, context={'request': request})

    print("Order of user ----------->", order)
    
    # Return the serialized data
    return Response(serializer.data, status=status.HTTP_200_OK)


