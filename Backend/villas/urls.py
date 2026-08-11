from django.urls import path

from .views import VillaListAPIView, VillaDetailAPIView


urlpatterns = [
    path('', VillaListAPIView.as_view(), name='villa-list'),
    path('<int:pk>/', VillaDetailAPIView.as_view(), name='villa-detail'),
]