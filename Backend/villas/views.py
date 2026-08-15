from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from .models import Villa
from .serializers import VillaSerializer


from math import ceil

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from drf_spectacular.utils import (
    extend_schema,
    OpenApiParameter,
    OpenApiTypes,
    OpenApiExample,
)

from .models import Villa
from .serializers import (
    VillaSerializer,
    VillaListResponseSerializer,
)


class VillaListAPIView(APIView):

    ALLOWED_FEATURES = {
        "pool",
        "deed",
        "furnished",
        "caretaker",
        "roof",
    }

    ALLOWED_SORTS = {
        "newest",
        "price-asc",
        "price-desc",
        "land-desc",
        "land-asc",
        "build-desc",
        "build-asc",
    }

    PER_PAGE = 12

    @extend_schema(
        summary="List villas",
        description=(
            "Get villas with filtering, sorting and pagination."
        ),
        parameters=[
            # -------------------------
            # Price
            # -------------------------

            OpenApiParameter(
                name="min_price",
                type=OpenApiTypes.INT,
                location=OpenApiParameter.QUERY,
                required=False,
                description=(
                    "Minimum price in billion Toman."
                ),
                examples=[
                    OpenApiExample(
                        name="5 billion",
                        value=5,
                    ),
                    OpenApiExample(
                        name="10 billion",
                        value=10,
                    ),
                ],
            ),

            OpenApiParameter(
                name="max_price",
                type=OpenApiTypes.INT,
                location=OpenApiParameter.QUERY,
                required=False,
                description=(
                    "Maximum price in billion Toman."
                ),
                examples=[
                    OpenApiExample(
                        name="15 billion",
                        value=15,
                    ),
                    OpenApiExample(
                        name="20 billion",
                        value=20,
                    ),
                ],
            ),

            # -------------------------
            # Land
            # -------------------------

            OpenApiParameter(
                name="min_land",
                type=OpenApiTypes.INT,
                location=OpenApiParameter.QUERY,
                required=False,
                description=(
                    "Minimum land area in square meters."
                ),
                enum=[
                    200,
                    500,
                    1000,
                    2000,
                    5000,
                ],
            ),

            OpenApiParameter(
                name="max_land",
                type=OpenApiTypes.INT,
                location=OpenApiParameter.QUERY,
                required=False,
                description=(
                    "Maximum land area in square meters."
                ),
                enum=[
                    200,
                    500,
                    1000,
                    2000,
                    5000,
                ],
            ),

            # -------------------------
            # Building
            # -------------------------

            OpenApiParameter(
                name="min_build",
                type=OpenApiTypes.INT,
                location=OpenApiParameter.QUERY,
                required=False,
                description=(
                    "Minimum building area in square meters."
                ),
                enum=[
                    200,
                    500,
                    1000,
                    2000,
                    5000,
                ],
            ),

            OpenApiParameter(
                name="max_build",
                type=OpenApiTypes.INT,
                location=OpenApiParameter.QUERY,
                required=False,
                description=(
                    "Maximum building area in square meters."
                ),
                enum=[
                    200,
                    500,
                    1000,
                    2000,
                    5000,
                ],
            ),

            # -------------------------
            # Bedrooms
            # -------------------------

            OpenApiParameter(
                name="beds",
                type=OpenApiTypes.INT,
                location=OpenApiParameter.QUERY,
                required=False,
                description=(
                    "Minimum number of bedrooms."
                ),
                enum=[
                    2,
                    3,
                    4,
                ],
            ),

            # -------------------------
            # Features
            # -------------------------

            OpenApiParameter(
                name="features",
                type=OpenApiTypes.STR,
                location=OpenApiParameter.QUERY,
                required=False,
                description=(
                    "Comma-separated features. "
                    "All selected features must exist. "
                    "Available values: "
                    "pool, deed, furnished, caretaker, roof."
                ),
                examples=[
                    OpenApiExample(
                        name="Pool",
                        value="pool",
                    ),
                    OpenApiExample(
                        name="Pool and deed",
                        value="pool,deed",
                    ),
                    OpenApiExample(
                        name="Multiple features",
                        value="pool,deed,furnished",
                    ),
                ],
            ),

            # -------------------------
            # Sort
            # -------------------------

            OpenApiParameter(
                name="sort",
                type=OpenApiTypes.STR,
                location=OpenApiParameter.QUERY,
                required=False,
                description=(
                    "Sorting method. "
                    "Default: newest."
                ),
                enum=[
                    "newest",
                    "price-asc",
                    "price-desc",
                    "land-desc",
                    "land-asc",
                    "build-desc",
                    "build-asc",
                ],
            ),

            # -------------------------
            # Page
            # -------------------------

            OpenApiParameter(
                name="page",
                type=OpenApiTypes.INT,
                location=OpenApiParameter.QUERY,
                required=False,
                description=(
                    "Page number. "
                    "Default: 1."
                ),
            ),
        ],
        responses={
            200: VillaListResponseSerializer,
            422: {
                "description": (
                    "Invalid query parameters."
                )
            },
        },
    )
    def get(self, request):

        villas = Villa.objects.all()

        # ==================================================
        # Parse integer parameters
        # ==================================================

        try:
            min_price = self.get_integer_param(
                request,
                "min_price",
            )

            max_price = self.get_integer_param(
                request,
                "max_price",
            )

            min_land = self.get_integer_param(
                request,
                "min_land",
            )

            max_land = self.get_integer_param(
                request,
                "max_land",
            )

            min_build = self.get_integer_param(
                request,
                "min_build",
            )

            max_build = self.get_integer_param(
                request,
                "max_build",
            )

            beds = self.get_integer_param(
                request,
                "beds",
            )

            page = self.get_integer_param(
                request,
                "page",
            )

        except ValueError as error:

            return Response(
                {
                    "detail": str(error)
                },
                status=status.HTTP_422_UNPROCESSABLE_ENTITY,
            )

        # ==================================================
        # Pagination
        # ==================================================

        if page is None:
            page = 1

        if page < 1:
            return Response(
                {
                    "detail": (
                        "page must be a positive integer."
                    )
                },
                status=status.HTTP_422_UNPROCESSABLE_ENTITY,
            )

        # ==================================================
        # Validate price range
        # ==================================================

        if (
            min_price is not None
            and max_price is not None
            and max_price <= min_price
        ):
            return Response(
                {
                    "detail": (
                        "max_price must be greater "
                        "than min_price."
                    )
                },
                status=status.HTTP_422_UNPROCESSABLE_ENTITY,
            )

        # ==================================================
        # Validate land range
        # ==================================================

        if (
            min_land is not None
            and max_land is not None
            and max_land <= min_land
        ):
            return Response(
                {
                    "detail": (
                        "max_land must be greater "
                        "than min_land."
                    )
                },
                status=status.HTTP_422_UNPROCESSABLE_ENTITY,
            )

        # ==================================================
        # Validate building range
        # ==================================================

        if (
            min_build is not None
            and max_build is not None
            and max_build <= min_build
        ):
            return Response(
                {
                    "detail": (
                        "max_build must be greater "
                        "than min_build."
                    )
                },
                status=status.HTTP_422_UNPROCESSABLE_ENTITY,
            )

        # ==================================================
        # Price filter
        # ==================================================

        # Contract:
        # min_price=5 means 5 billion Toman
        #
        # Database:
        # price is stored in Toman.

        if min_price is not None:
            villas = villas.filter(
                price__gte=min_price 
            )

        if max_price is not None:
            villas = villas.filter(
                price__lte=max_price 
            )

        # ==================================================
        # Land filter
        # ==================================================

        if min_land is not None:
            villas = villas.filter(
                land_area__gte=min_land
            )

        if max_land is not None:
            villas = villas.filter(
                land_area__lte=max_land
            )

        # ==================================================
        # Building filter
        # ==================================================

        if min_build is not None:
            villas = villas.filter(
                building_area__gte=min_build
            )

        if max_build is not None:
            villas = villas.filter(
                building_area__lte=max_build
            )

        # ==================================================
        # Bedrooms filter
        # ==================================================

        if beds is not None:
            villas = villas.filter(
                room_count__gte=beds
            )

        # ==================================================
        # Features filter
        # ==================================================

        features_param = request.query_params.get(
            "features"
        )

        if features_param:

            features = [
                feature.strip()
                for feature in features_param.split(",")
                if feature.strip()
            ]

            invalid_features = [
                feature
                for feature in features
                if feature not in self.ALLOWED_FEATURES
            ]

            if invalid_features:
                return Response(
                    {
                        "detail": "Invalid feature(s).",
                        "invalid_features": invalid_features,
                        "allowed_features": sorted(
                            self.ALLOWED_FEATURES
                        ),
                    },
                    status=status.HTTP_422_UNPROCESSABLE_ENTITY,
                )

            # AND logic
            #
            # features=pool,deed
            #
            # => pool=True AND deed=True

            for feature in features:
                villas = villas.filter(
                    **{
                        feature: True
                    }
                )

        # ==================================================
        # Sorting
        # ==================================================

        sort = request.query_params.get(
            "sort",
            "newest",
        )

        if sort not in self.ALLOWED_SORTS:
            return Response(
                {
                    "detail": "Invalid sort value.",
                    "allowed_sorts": sorted(
                        self.ALLOWED_SORTS
                    ),
                },
                status=status.HTTP_422_UNPROCESSABLE_ENTITY,
            )

        sort_map = {
            "newest": "-created_at",
            "price-asc": "price",
            "price-desc": "-price",
            "land-desc": "-land_area",
            "land-asc": "land_area",
            "build-desc": "-building_area",
            "build-asc": "building_area",
        }

        # Secondary ordering for stable pagination
        villas = villas.order_by(
            sort_map[sort],
            "-id",
        )

        # ==================================================
        # Pagination
        # ==================================================

        total = villas.count()

        last_page = (
            ceil(total / self.PER_PAGE)
            if total > 0
            else 0
        )

        # If there are records and requested page
        # does not exist
        if total > 0 and page > last_page:
            return Response(
                {
                    "detail": "Page not found."
                },
                status=status.HTTP_404_NOT_FOUND,
            )

        start = (page - 1) * self.PER_PAGE
        end = start + self.PER_PAGE

        villas = villas[start:end]

        # ==================================================
        # Serialize
        # ==================================================

        serializer = VillaSerializer(
            villas,
            many=True,
            context={
                "request": request
            },
        )

        return Response(
            {
                "data": serializer.data,
                "pagination": {
                    "current_page": page,
                    "per_page": self.PER_PAGE,
                    "total": total,
                    "last_page": last_page,
                },
            },
            status=status.HTTP_200_OK,
        )

    # ======================================================
    # Helper
    # ======================================================

    @staticmethod
    def get_integer_param(request, name):

        value = request.query_params.get(name)

        if value is None or value == "":
            return None

        try:
            value = int(value)

        except (TypeError, ValueError):
            raise ValueError(
                f"{name} must be a valid integer."
            )

        if value < 0:
            raise ValueError(
                f"{name} cannot be negative."
            )

        return value


class VillaDetailAPIView(APIView):

    @extend_schema(
        summary="Get villa detail",
        responses={
            200: VillaSerializer,
            404: {
                "description": "Villa not found."
            },
        },
    )
    def get(self, request, pk):

        try:
            villa = Villa.objects.get(pk=pk)

        except Villa.DoesNotExist:
            return Response(
                {
                    "detail": "Villa not found."
                },
                status=status.HTTP_404_NOT_FOUND,
            )

        serializer = VillaSerializer(
            villa,
            context={
                "request": request
            },
        )

        return Response(
            serializer.data,
            status=status.HTTP_200_OK,
        )

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