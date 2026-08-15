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