from rest_framework import serializers
from calibra_api.models.measurement import Measurement
class MeasurementSerializer(serializers.ModelSerializer):
    class Meta:
        model = Measurement
        fields = '__all__'
