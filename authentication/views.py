from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .forms import LoginForm, RegisterForm
# Create your views here.

@api_view(['POST', ])
def sign_up(request) :
    if request.method == 'POST':
        print(request.data)
        form = RegisterForm()
        return Response({"message": "Hello, world!"})
     