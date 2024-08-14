from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)
from  . import views 

from django.urls import path, include

urlpatterns = [
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('login/', views.Login.as_view(), name='login'),
    path('register/', views.sign_up, name='register'),
    path('logout/', views.logout, name='logou_user'),
]