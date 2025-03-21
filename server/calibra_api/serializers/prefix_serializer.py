from rest_framework import serializers
from calibra_api.models.prefix import Prefix

class PrefixSerializer(serializers.ModelSerializer):
    class Meta:
        model = Prefix
        fields = '__all__'
