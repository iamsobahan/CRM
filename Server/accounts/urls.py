from django.urls import path
from .views import RegisterAPIView, LoginApiView, Get_user, ChangePasswordView


urlpatterns = [
    path("register/", RegisterAPIView.as_view(), name="register"),
    path("login/", LoginApiView.as_view(), name="register"),
    path("get-user/", Get_user.as_view(), name="get-user"),
    path("change-password/", ChangePasswordView.as_view(), name="change-password"),
   
    
  
]
