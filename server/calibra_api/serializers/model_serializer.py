from rest_framework import serializers
from calibra_api.models.model import Model

class ModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Model
        fields = '__all__'
