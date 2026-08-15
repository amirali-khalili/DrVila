from django.urls import path

from .views import *


urlpatterns = [
    
    
    
    path('villas/', VillaListAPIView.as_view(), name='villa-list'),
    path('villas/<int:pk>/', VillaDetailAPIView.as_view(), name='villa-detail'),
    
    path('earths/', EarthListAPIView.as_view(), name='earth-list'),
    path('gardens/', GardenListAPIView.as_view(), name='garden-list'),
    
]