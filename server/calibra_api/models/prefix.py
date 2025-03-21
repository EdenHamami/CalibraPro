from django.db import models

class Prefix(models.Model):
    name = models.CharField(max_length=50, unique=True)  # Prefix name (e.g., 'kilo')
    symbol = models.CharField(max_length=10, unique=True, db_collation="utf8mb4_bin")  # Case-sensitive symbol
    exponent = models.IntegerField()  # Power of 10 (e.g., 3 for kilo -> 10^3)

    class Meta:
        db_table = 'unit_prefixes'

    def __str__(self):
        return f"{self.name} ({self.symbol})"
