from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)
from  . import views 

from django.urls import path, include

urlpatterns = [
    path('api/token/', views.Login.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', views.refresh_token.as_view(), name='token_refresh'),
    path('register/', views.sign_up, name='register'),
    path('logout/', views.logout, name='logou_user'),
]