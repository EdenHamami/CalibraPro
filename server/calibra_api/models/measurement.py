from django.db import models
from .device import Device


class Measurement(models.Model):
    device = models.ForeignKey(Device, on_delete=models.CASCADE)
    measurement_date = models.DateField(null=True, blank=True)
    input_value = models.DecimalField(max_digits=10, decimal_places=4, null=True, blank=True)
    output_value = models.DecimalField(max_digits=10, decimal_places=4, null=True, blank=True)
    unit1 = models.CharField(max_length=50, null=True, blank=True)
    deviation = models.DecimalField(max_digits=10, decimal_places=4, null=True, blank=True)
    tolerance = models.DecimalField(max_digits=10, decimal_places=4, null=True, blank=True)
    unit2 = models.CharField(max_length=50, null=True, blank=True)
    uncertainty = models.DecimalField(max_digits=10, decimal_places=4, null=True, blank=True)
    unit3 = models.CharField(max_length=50, null=True, blank=True)
    threshold = models.DecimalField(max_digits=10, decimal_places=4, null=True, blank=True)
    identifier = models.CharField(max_length=255, null=True, blank=True)
    status = models.PositiveSmallIntegerField(null=True, blank=True)
    comments = models.TextField(null=True, blank=True)

    class Meta:
        db_table = 'measurements'

    def __str__(self):
        return f"Measurement {self.id} for Device {self.device.id}"
