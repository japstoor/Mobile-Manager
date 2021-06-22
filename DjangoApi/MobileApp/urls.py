from django.conf.urls import url
from MobileApp import views

from django.conf import settings
from django.conf.urls.static import static
urlpatterns=[
    url(r'^brand/$',views.brandApi),
    url(r'^brand/([0-9]+)$',views.brandApi),

    url(r'^model/$',views.modelsApi),
    url(r'^model/([0-9]+)$',views.modelsApi),
    url(r'^profile/$', views.ShowProfile.as_view()),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)