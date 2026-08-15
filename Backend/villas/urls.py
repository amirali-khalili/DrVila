from django.urls import path

from .views import *


urlpatterns = [
    
    
    
    path('villas', VillaListAPIView.as_view(), name='villa-list'),
    path('villas/<int:pk>/', VillaDetailAPIView.as_view(), name='villa-detail'),
    
    path('eathes', EarthListAPIView.as_view(), name='villa-list'),
]