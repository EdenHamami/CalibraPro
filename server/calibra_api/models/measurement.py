from django.db import models
from .device import Device
from .prefix import Prefix

class Measurement(models.Model):
    device = models.ForeignKey(Device, on_delete=models.CASCADE)
    measurement_date = models.DateField(null=True, blank=True)

    input_value = models.DecimalField(max_digits=10, decimal_places=4, null=True, blank=True)
    output_value = models.DecimalField(max_digits=10, decimal_places=4, null=True, blank=True)
    prefix1 = models.ForeignKey(Prefix, on_delete=models.SET_NULL, null=True, blank=True, to_field="symbol", related_name="prefix1")
    unit1 = models.CharField(max_length=50, null=True, blank=True)  # Actual unit (e.g., grams)

    deviation = models.DecimalField(max_digits=10, decimal_places=4, null=True, blank=True)
    prefix2 = models.ForeignKey(Prefix, on_delete=models.SET_NULL, null=True, blank=True, to_field="symbol", related_name="prefix2")
    unit2 = models.CharField(max_length=50, null=True, blank=True)  # Actual unit (e.g., liters)
   
    uncertainty = models.DecimalField(max_digits=10, decimal_places=4, null=True, blank=True)
    prefix3 = models.ForeignKey(Prefix, on_delete=models.SET_NULL, null=True, blank=True, to_field="symbol", related_name="prefix3")
    unit3 = models.CharField(max_length=50, null=True, blank=True)  # Actual unit (e.g., meters)
    
    tolerance = models.DecimalField(max_digits=10, decimal_places=4, null=True, blank=True)
    prefix4 = models.ForeignKey(Prefix, on_delete=models.SET_NULL, null=True, blank=True, to_field="symbol", related_name="prefix4")
    unit4 = models.CharField(max_length=50, null=True, blank=True)  # Actual unit (e.g., meters)
    
    parameter = models.DecimalField(max_digits=10, decimal_places=4, null=True, blank=True)
    prefix5 = models.ForeignKey(Prefix, on_delete=models.SET_NULL, null=True, blank=True, to_field="symbol", related_name="prefix5")
    unit5 = models.CharField(max_length=50, null=True, blank=True)  # Actual unit (e.g., meters)
    
    threshold = models.DecimalField(max_digits=10, decimal_places=4, null=True, blank=True)
    identifier = models.CharField(max_length=255, null=True, blank=True)
    status = models.PositiveSmallIntegerField(null=True, blank=True)
    comments = models.TextField(null=True, blank=True)

    class Meta:
        db_table = 'measurements'

    def __str__(self):
        return f"Measurement {self.id} for Device {self.device.id}"
