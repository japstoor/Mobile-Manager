# Generated by Django 3.2.3 on 2021-06-09 05:00

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Brands',
            fields=[
                ('BrandId', models.AutoField(primary_key=True, serialize=False)),
                ('BrandName', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='Models',
            fields=[
                ('ModelId', models.AutoField(primary_key=True, serialize=False)),
                ('ModelName', models.CharField(max_length=100)),
                ('BrandName', models.CharField(max_length=100)),
                ('Quantity', models.CharField(max_length=100)),
            ],
        ),
    ]