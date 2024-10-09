from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView
from .models import Supplier
from .serializers import SupplierSerializer
from rest_framework.permissions import AllowAny

# Create your views here.


class SupplierApiView(APIView) : 
    permission_classes = [AllowAny]
    def get(self, request) :
        suppliers = Supplier.objects.all()
        serializer =  SupplierSerializer(suppliers, many=True) 
        return Response(serializer.data, status=status.HTTP_200_OK)
       
        
    def post(self, request) : 
        serializer = SupplierSerializer(data = request.data)
        if serializer.is_valid() : 
            serializer.save()
            return Response({'message': 'Supplier created successfully'},  status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    def put(self, request) : 
        pass
    def patch(self, request) : 
        pass

    def delete(self, request) : 
        pass