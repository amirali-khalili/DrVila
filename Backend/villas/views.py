from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from .models import Villa
from .serializers import VillaSerializer


class VillaListAPIView(APIView):

    def get(self, request):
        villas = Villa.objects.all()
        serializer = VillaSerializer(
            villas,
            many=True,
            context={'request': request}
        )

        return Response(serializer.data)


class VillaDetailAPIView(APIView):

    def get(self, request, pk):
        try:
            villa = Villa.objects.get(pk=pk)
        except Villa.DoesNotExist:
            return Response(
                {'detail': 'Villa not found.'},
                status=status.HTTP_404_NOT_FOUND
            )

        serializer = VillaSerializer(
            villa,
            context={'request': request}
        )

        return Response(serializer.data)