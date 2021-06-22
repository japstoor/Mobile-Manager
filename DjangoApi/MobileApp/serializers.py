from django.contrib.auth import get_user_model
from rest_framework import serializers
from MobileApp.models import Brands, Models

class BrandSerializer(serializers.ModelSerializer):
    class Meta:
        model = Brands
        fields = ('BrandId',
                  'BrandName')

class ModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Models
        fields = ('ModelId',
                  'ModelName',
                  'BrandName',
                  'Quantity'
                  )

User = get_user_model()       
class showProfileSerializer(ModelSerializer):
   class Meta:
      model = User
      fields = [
         'id',
         'email', 
         'user_name'    
      ]