from django.db import models

# Create your models here.

class Brands(models.Model):
    BrandId = models.AutoField(primary_key=True)
    BrandName = models.CharField(max_length=100)

class Models(models.Model):
    ModelId = models.AutoField(primary_key=True)
    ModelName = models.CharField(max_length=100)
    BrandName = models.CharField(max_length=100)
    Quantity  = models.CharField(max_length=100)