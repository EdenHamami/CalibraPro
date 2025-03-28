from rest_framework import viewsets
from calibra_api.models.measurement import Measurement
from calibra_api.serializers.measurment_serializer import MeasurementSerializer

class MeasurementViewSet(viewsets.ViewSet):
    """
    A ViewSet that provides CRUD operations for Measurement.
    """
    queryset = Measurement.objects.all()
    serializer_class = MeasurementSerializer

# Auto functions:
# list
# retrieve
# create
# update
# partial_update
# destroy