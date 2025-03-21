from rest_framework import viewsets
from calibra_api.models.prefix import Prefix
from calibra_api.serializers.prefix_serializer import PrefixSerializer


class PrefixViewSet(viewsets.ModelViewSet):
    """
    A ViewSet that provides CRUD operations for Model.
    """
    queryset = Prefix.objects.all()
    serializer_class = PrefixSerializer
