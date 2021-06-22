from django.db import models
from django.db.models.base import Model
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework import response
from rest_framework.parsers import JSONParser
from django.http.response import HttpResponse, JsonResponse
from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView
from MobileApp.models import Brands, Models
from MobileApp.serializers import BrandSerializer, ModelSerializer, showProfileSerializer
from django.core.files.storage import default_storage
from rest_framework.decorators import api_view, permission_classes
# Create your views here.
@csrf_exempt
def brandApi(request,id=0):
    if request.method=='GET':
        brands = Brands.objects.all()
        brands_sializer = BrandSerializer(brands,many=True)
        return JsonResponse(brands_sializer.data, safe=False)

    elif request.method=='POST': 
        brand_data=JSONParser().parse(request)
        brand_serializer = BrandSerializer(data=brand_data)
        if brand_serializer.is_valid():
            brand_serializer.save()
            return JsonResponse("Added Successfully!!" , safe=False)
        return JsonResponse("Failed to Add.",safe=False)

    elif request.method=='PUT':
        brand_data = JSONParser().parse(request)
        brand=Brands.objects.get(BrandId=brand_data['BrandId'])
        brand_serializer=BrandSerializer(brand,data=brand_data)
        if brand_serializer.is_valid():
            brand_serializer.save()
            return JsonResponse("Updated Successfully!!", safe=False)
        return JsonResponse("Failed to Update.", safe=False)

    elif request.method=="DELETE":
        brand = Brands.objects.get(BrandId=id)
        brand.delete()
        return JsonResponse("Delete Successfully!!" , safe=False)
    return JsonResponse("Failed to Delete.",safe=False)


@csrf_exempt
def modelsApi(request,id=0):
    if request.method=='GET':
        models = Models.objects.all()
        models_sializer = ModelSerializer(models,many=True)
        return JsonResponse(models_sializer.data,safe=False)

    elif request.method=='POST':
        models_data=JSONParser().parse(request)
        models_serializer = ModelSerializer(data=models_data)
        if models_serializer.is_valid():
            models_serializer.save()
            return JsonResponse("Added Successfully!!" , safe=False)
        return JsonResponse("Failed to Add.",safe=False)

    elif request.method=='PUT':
        models_data = JSONParser().parse(request)
        models=Models.objects.get(ModelId=models_data['ModelId'])
        models_serializer=ModelSerializer(models,data=models_data)
        if models_serializer.is_valid():
            models_serializer.save()
            return JsonResponse("Updated Successfully!!", safe=False)
        return JsonResponse("Failed to Update.", safe=False)

    elif request.method=="DELETE":
        models = Models.objects.get(ModelId=id)
        models.delete()
        return JsonResponse("Delete Successfully!!" , safe=False)
    return JsonResponse("Failed to Delete.",safe=False)


class ShowProfile(APIView):
	@permission_classes([IsAuthenticated])
	def get(self, request):
		serializer = showProfileSerializer(request.user)
		return JsonResponse(serializer.data)