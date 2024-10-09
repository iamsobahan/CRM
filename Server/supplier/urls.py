from django.urls import path
from .views import SupplierApiView

urlpatterns = [
     path('supplier/', SupplierApiView.as_view(), name='supplier')
]