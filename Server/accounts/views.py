from rest_framework.views import APIView

from rest_framework.response import Response
from rest_framework import status
from .serializers import UserSerializer, LoginSerializer, RegisterSerializer,ChangePasswordSerializer, UpdateSerializer
from rest_framework.permissions import AllowAny
from django.contrib.auth import authenticate, get_user_model
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.permissions import IsAuthenticated

from rest_framework_simplejwt.authentication import JWTAuthentication
User = get_user_model()


class RegisterAPIView(APIView):
    permission_classes = [AllowAny]      
    def post(self, request):
        print(request.data)
        serializer = RegisterSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'message': 'User created successfully'}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class LoginApiView(APIView) : 
    permission_classes = [AllowAny]
    def post(self, request):
        serializer = LoginSerializer(data=request.data)
        if serializer.is_valid():
            email = serializer.validated_data.get('email')
            password = serializer.validated_data.get('password')

            user = authenticate( email=email, password=password)
            if user:
                refresh = RefreshToken.for_user(user)
                user_serializer = UserSerializer(user)
                return Response({
                    'refresh': str(refresh),
                    'access': str(refresh.access_token),
                    'user' : user_serializer.data
                }, status=status.HTTP_200_OK)
            return Response({"error": "Invalid email or password"}, status=status.HTTP_400_BAD_REQUEST)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class Get_user(APIView):
    permission_classes = [IsAuthenticated]
   
    def get(self, request): 
        user = User.objects.get(id= request.user.id)
        serializer = UserSerializer(user)
        return Response(serializer.data)
    
    def put(self, request):
        user = User.objects.get(id=request.user.id)
    
        serializer = UpdateSerializer(user, data=request.data, partial=True)
        if serializer.is_valid():
        # Get the validated data
            validated_data = serializer.validated_data

        # Update only non-empty fields
            for key, value in validated_data.items():
                if value:  # Check if value is not empty
                    setattr(user, key, value)

            user.save()  # Save the updated user instance
            return Response({'message': "Update Successfully"}, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



class ChangePasswordView(APIView):
    permission_classes = [AllowAny,]
    def post(self, request, *args, **kwargs):
        serializer = ChangePasswordSerializer(data=request.data)
        if serializer.is_valid():
            serializer.update_password()
            return Response({"detail": "Password changed successfully."}, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    


