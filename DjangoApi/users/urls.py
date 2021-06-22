from django.urls import path
from rest_framework import views
from .views import CustomUserCreate, BlacklistTokenUpdateView
from django.conf import settings
from django.conf.urls.static import static
app_name = 'users'

urlpatterns = [
    path('create/', CustomUserCreate.as_view(), name="create_user"),
    path('logout/blacklist/', BlacklistTokenUpdateView.as_view(),
         name='blacklist')
]