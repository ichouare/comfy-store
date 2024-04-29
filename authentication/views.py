from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response

# Create your views here.

@api_view(['POST', ])
def sign_up(request) :
    if request.method == 'POST':
        print(request.data)
        return Response({"message": "Hello, world!"})
     