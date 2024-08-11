from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.views  import APIView
from django.contrib.auth import authenticate, logout, login
# from django.views.decorators.csrf import csrf_exempt,csrf_protect #Add this
from rest_framework.decorators import permission_classes, authentication_classes

from .serializers import RegisterUserSerialzer
from rest_framework import status
from rest_framework.permissions import IsAuthenticated, AllowAny
from .models import CustomUser
from django.conf import settings






def get_tokens_for_user(user):
    refresh = RefreshToken.for_user(user)
    return {
        'refresh': str(refresh),
        'access': str(refresh.access_token),
    }

@api_view(['POST', ])
def sign_up(request) :
    if request.method == 'POST':
        print(request.data)
        serializer =  RegisterUserSerialzer(data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)
        else:
            print(serializer.errors)
            if  'username' in serializer.errors :
                        return Response(serializer.errors['username'][0], status=status.HTTP_409_CONFLICT)
            elif 'email' in serializer.errors:
                        return Response(serializer.errors['email'][0], status=status.HTTP_409_CONFLICT)
            else:
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class refresh_token(APIView):
 permission_classes = [AllowAny]
 def post(self, request, format=None):
    response = Response()
    refresh_token = request.COOKIES['refresh']
    if refresh_token is None:
        return Response("not refresh token is provide in cookies" , status=400)
        # Attempt to create a RefreshToken instance from the refresh token
    refresh = RefreshToken(refresh_token)
    if refresh is None:
        return Response("not refresh token is provide in cookies" , status=400)
    else:
        access_token = str(refresh.access_token)
        response.set_cookie(
                    
                    key=settings.SIMPLE_JWT["AUTH_COOKIE"],
                    value=access_token,
                    httponly=True,
                    secure=settings.SIMPLE_JWT["AUTH_COOKIE_SECURE"],
                    samesite=settings.SIMPLE_JWT["AUTH_COOKIE_SAMESITE"],
                )
        response.set_cookie(
                    
                    key=settings.SIMPLE_JWT["AUTH_COOKIE_REFRESH"],
                    value=str(refresh),
                    httponly=True,
                    secure=settings.SIMPLE_JWT["AUTH_COOKIE_SECURE"],
                    samesite=settings.SIMPLE_JWT["AUTH_COOKIE_SAMESITE"],
                )
        response.data = {"detail": "Tokens refreshed successfully"}
        response.status_code = 200
        return response

class Login(APIView):
    def post(self, request, format=None):
        print("worked \n")
        data = request.data
        username = data['username']
        password = data['password']
        response = Response()
        user = authenticate(username=username, password=password)
        usr = CustomUser.objects.get(username=username)
        print(username, password)
        print(user)
        if user is not None:
            # login(request, user)
            refresh  = RefreshToken.for_user(usr)
            refresh_token = str(refresh),
            access_token = str(refresh.access_token),
            response = Response({
                'refresh':  refresh_token,
                'access': access_token,
            })

            print("refresh========>", refresh_token)

            # Set the cookies
            response.set_cookie(
                key=settings.SIMPLE_JWT["AUTH_COOKIE"],
                value=access_token,
                httponly=True,
                secure=settings.SIMPLE_JWT["AUTH_COOKIE_SECURE"],
                samesite=settings.SIMPLE_JWT["AUTH_COOKIE_SAMESITE"],
            )
            response.set_cookie(
                key=settings.SIMPLE_JWT["AUTH_COOKIE_REFRESH"],
                value=refresh_token,
                httponly=True,
                secure=settings.SIMPLE_JWT["AUTH_COOKIE_SECURE"],
                samesite=settings.SIMPLE_JWT["AUTH_COOKIE_SAMESITE"],
            )

            return response
        else:
            return Response({"detail": "Invalid credentials"}, status=400)

@api_view(['POST'])
@permission_classes([IsAuthenticated])
# @authentication_classes(['JWTAuthentication'])
def logout(request):
    if(request.method == 'POST'):
        print("here")
        response = Response()
        response.delete_cookie('access') 
        response.delete_cookie('refresh')
        response.status_code = 200
        return response
