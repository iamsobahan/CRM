from django.urls import path
from .views import Inventory

urlpatterns = [
    path('products/',Inventory.as_view(),  name= 'products')
]
