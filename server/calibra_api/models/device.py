from django.db import models
from .user import User
from .model import Model

class Device(models.Model):
    serial_number = models.CharField(max_length=100, unique=True)
    model = models.ForeignKey(Model, on_delete=models.CASCADE, null=True, blank=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    device_name = models.CharField(max_length=255, null=True, blank=True)
    device_features = models.TextField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        db_table = 'devices'

    def __str__(self):
        return self.serial_number
