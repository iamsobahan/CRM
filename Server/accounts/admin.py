from django.contrib import admin
from .models import User, Role, User_role

# Register your models here.

class UserAdmin(admin.ModelAdmin) : 
    list_display = [ 'id', 'user_name', 'email']
    


admin.site.register(User, UserAdmin)
admin.site.register(Role)
admin.site.register(User_role)