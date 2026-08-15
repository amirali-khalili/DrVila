from rest_framework import serializers
from .models import Villa, VillaImage


class VillaImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = VillaImage
        fields = ['id', 'image']



class VillaSerializer(serializers.ModelSerializer):
    images = VillaImageSerializer(many=True, read_only=True)
    location_display = serializers.SerializerMethodField()

    class Meta:
        model = Villa
        fields = "__all__"

    def get_location_display(self, obj):
        return obj.get_location_display()


class VillaListResponseSerializer(serializers.Serializer):
    data = VillaSerializer(many=True)

    pagination = serializers.DictField()
    
    
    
from rest_framework import serializers

from .models import Earth, EarthImage


class EarthImageSerializer(serializers.ModelSerializer):

    class Meta:
        model = EarthImage
        fields = [
            "id",
            "image",
            "created_at",
        ]


class EarthSerializer(serializers.ModelSerializer):
    location_display = serializers.SerializerMethodField()

    images = EarthImageSerializer(
        many=True,
        read_only=True,
    )

    class Meta:
        model = Earth
        fields = "__all__"
        
        
    def get_location_display(self, obj):
        return obj.get_location_display()

class EarthListResponseSerializer(serializers.Serializer):
    data = EarthSerializer(many=True)

    pagination = serializers.DictField()
    
    
    
from rest_framework import serializers

from .models import Garden, GardenImage


class GardenImageSerializer(serializers.ModelSerializer):

    class Meta:
        model = GardenImage

        fields = [
            "id",
            "image",
            "created_at",
        ]



class GardenSerializer(serializers.ModelSerializer):

    images = GardenImageSerializer(
        many=True,
        read_only=True,
    )

    class Meta:
        model = Garden

        fields = "__all__"




class GardenListResponseSerializer(serializers.Serializer):

    data = GardenSerializer(
        many=True
    )

    pagination = serializers.DictField()
    
