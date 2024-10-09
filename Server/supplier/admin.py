from django.contrib import admin
from .models import Supplier

# Register your models here.

class SupplierAdmin(admin.ModelAdmin) : 
    list_display = ['supplier_id', 'company_name', 'contact_name', 'email', 'phone', 'address_line1', 'country', 'website', 'created_at', 'updated_at']


admin.site.register(Supplier, SupplierAdmin )
