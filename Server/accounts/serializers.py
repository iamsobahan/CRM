from rest_framework import serializers
from django.contrib.auth import get_user_model
from .models import Role, User_role
User = get_user_model()

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        exclude = ('password',)


class UpdateSerializer(serializers.ModelSerializer):
    user_name = serializers.CharField(required=False)  # Mark as optional
    class Meta:
        model = User
        fields = ['user_name', 'full_name', 'gender', 'position', 'image', 'date_of_joining', 'date_of_birth', 'address', 'phone']
        
class RegisterSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = User
        fields = [ 'user_name' ,'email', 'password', 'terms_conditions']  # Explicit fields

    
    def create(self, validated_data, **extra_fields):
        user = User.objects.create_user(
            user_name=validated_data['user_name'],
            email=validated_data['email'],
            terms_conditions = validated_data['terms_conditions'],
            password = validated_data['password']
        )
              
        return user

    # def update(self, instance, validated_data):
    # # Hash the password if it's being updated
    #     if 'password' in validated_data:
    #         instance.set_password(validated_data['password'])  # Use set_password
    #         validated_data.pop('password')  # Remove password from validated_data, as it's already handled

    #     # Update other fields normally
    #     return super().update(instance, validated_data)



class LoginSerializer(serializers.Serializer):
    email = serializers.EmailField(required=True)
    password = serializers.CharField(required=True, write_only=True)

    
from django.contrib.auth import authenticate

class ChangePasswordSerializer(serializers.Serializer):
    email = serializers.EmailField(required=True)
    old_password = serializers.CharField(required=True)
    new_password = serializers.CharField(required=True)


    def validate(self, attrs):
        email = attrs.get('email')
        old_password = attrs.get('old_password')
        new_password = attrs.get('new_password')
        
        # Authenticate the user
        user = authenticate(email=email, password=old_password)
        if user is None:
            raise serializers.ValidationError("Old password is incorrect.")

        attrs['user'] = user
        return attrs

    def update_password(self):
        user = self.validated_data['user']
        user.set_password(self.validated_data['new_password'])
        user.save()
        return user