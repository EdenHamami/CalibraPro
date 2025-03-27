from rest_framework import viewsets
from calibra_api.models.model import Model
from calibra_api.serializers.model_serializer import ModelSerializer


class ModelViewSet(viewsets.ModelViewSet):
    """
    A ViewSet that provides CRUD operations for Model.
    """
    queryset = Model.objects.all()
    serializer_class = ModelSerializer

# Auto functions:
# list
# retrieve
# create
# update
# partial_update
# destroy