from django.urls import path

from .views import *


urlpatterns = [
    
    
    
    path('villas/', VillaListAPIView.as_view(), name='villa-list'),
    path('villas/<int:pk>/', VillaDetailAPIView.as_view(), name='villa-detail'),
    
    path('earths/', EarthListAPIView.as_view(), name='earth-list'),
    path('earths/<int:pk>/', EarthDetailAPIView.as_view(), name='earth-detail'),
    
    path('gardens/', GardenListAPIView.as_view(), name='garden-list'),
    path('gardens/<int:pk>/', GardenDetailAPIView.as_view(), name='garden-detail'),
    
    path("villas/latest/", LatestVillasAPIView.as_view(), name="latest-villas"),
    path(
    "villas/<int:pk>/similar/",
    SimilarVillasAPIView.as_view(),
    name="similar-villas",
),
    path(
    "earth/<int:pk>/similar/",
    SimilarEarthsAPIView.as_view(),
    name="similar-earths",
),
    path(
    "gardens/<int:pk>/similar/",
    SimilarGardensAPIView.as_view(),
    name="similar-gardens",
)
]