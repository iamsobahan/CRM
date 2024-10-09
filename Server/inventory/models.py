from django.db import models
import uuid
from supplier.models import Supplier
# Create your models here.


class Product(models.Model):
    id = None
    product_id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    product_name = models.CharField(max_length=255)
    description = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    stock = models.PositiveIntegerField(default=0)  # Current stock level
    supplier = models.ForeignKey(Supplier, on_delete=models.SET_NULL, null=True)
    sku = models.CharField(max_length=100, unique=True)
    image = models.ImageField(upload_to='media/', blank=True, null=True)
    date_added = models.DateTimeField(auto_now_add=True)
    is_active = models.BooleanField(default=True)
    
    def __str__(self):
        return self.name


class Purchase(models.Model) : 
    id = None
    purchase_id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)

