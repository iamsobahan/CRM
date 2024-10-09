import uuid
from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin
from .manager import UserManager


class User(AbstractBaseUser, PermissionsMixin):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False, unique=True)
    email = models.EmailField(unique=True)
    user_name = models.CharField(max_length=100)
    full_name = models.CharField(max_length=100, null=True, blank=True)
    phone = models.CharField(max_length=100, null=True, blank=True)
    image = models.ImageField(default="demo.png", upload_to="media/", blank=True)
    position = models.CharField(max_length=100, null=True, blank=True)
    gender = models.CharField(max_length=50, choices=[("Male", "Male"), ("Female", "Female")], null=True, blank=True)
    date_of_joining = models.DateField(null=True, blank=True)
    address = models.CharField(max_length=100, null=True, blank=True)
    terms_conditions = models.BooleanField()
    date_of_birth = models.DateField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

  
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['user_name']

    objects = UserManager()


    def __str__(self):
        return self.user_name
    


class Role(models.Model) : 
    role_id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False, unique=True)
    name = models.CharField(max_length=200)
    def __str__(self) : 
        return self.name


class User_role(models.Model) : 
    user_roll_id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False, unique=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='user_roll')
    role = models.ForeignKey(Role, on_delete=models.CASCADE)
    

