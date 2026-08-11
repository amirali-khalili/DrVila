from rest_framework import serializers
from .models import Villa, VillaImage


class VillaImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = VillaImage
        fields = ['id', 'image']


class VillaSerializer(serializers.ModelSerializer):
    images = VillaImageSerializer(many=True, read_only=True)

    class Meta:
        model = Villa
        fields = [
            'id',
            'title',
            'description',
            'address',
            'price',
            'poster',
            'land_area',
            'building_area',
            'room_count',
            'bathroom_count',
            'parking_count',
            'construction_year',
            'features',
            'images',
            'created_at',
        ]