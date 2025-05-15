from rest_framework import viewsets
from calibra_api.models.device import Device
from calibra_api.serializers.device_serializer import DeviceSerializer

class DeviceViewSet(viewsets.ModelViewSet):
    """
    A ViewSet that provides full CRUD operations for Device model.

    Available endpoints:
    - GET    /api/devices/           → list all devices (optionally filter by ?user_id=)
    - GET    /api/devices/<id>/      → retrieve a single device
    - POST   /api/devices/           → create a new device
    - PUT    /api/devices/<id>/      → full update of a device
    - PATCH  /api/devices/<id>/      → partial update
    - DELETE /api/devices/<id>/      → delete a device
    """

    serializer_class = DeviceSerializer

    def get_queryset(self):
        """
        Optionally filters devices by user_id provided in the query params.
        If no user_id is given, returns all devices.
        """
        queryset = Device.objects.all()
        user_id = self.request.query_params.get("user_id")

        if user_id:
            queryset = queryset.filter(user__id=user_id)

        return queryset
