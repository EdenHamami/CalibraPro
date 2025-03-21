from rest_framework import viewsets
from calibra_api.models.device import Device
from calibra_api.serializers.device_serializer import DeviceSerializer

class DeviceViewSet(viewsets.ViewSet):
    """
    A ViewSet that provides CRUD operations for Device.
    """
    queryset = Device.objects.all()
    serializer_class = DeviceSerializer
