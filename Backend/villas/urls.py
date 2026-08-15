from django.urls import path

from .views import *


urlpatterns = [
    
    
    
    path('', VillaListAPIView.as_view(), name='villa-list'),
    path('<int:pk>/', VillaDetailAPIView.as_view(), name='villa-detail'),
    
    path('eathes', EarthListAPIView.as_view(), name='villa-list'),
]