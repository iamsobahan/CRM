from django.db import models
import uuid
class Supplier(models.Model):
    
    id= None
    supplier_id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    company_name = models.CharField(max_length=255)  
    contact_name = models.CharField(max_length=255) 
    email = models.EmailField(unique=True)  
    phone = models.CharField(max_length=20, blank=True, null=True) 
    address_line1 = models.CharField(max_length=255)  
    country = models.CharField(max_length=100)  
    website = models.CharField(max_length=200, blank=True, null=True)  
    created_at = models.DateTimeField(auto_now_add=True) 
    updated_at = models.DateTimeField(auto_now=True)  

    def __str__(self):
        return self.company_name


