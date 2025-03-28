from django.db import models

class User(models.Model):
    email = models.EmailField(unique=True)
    display_name = models.CharField(max_length=255, null=False, blank=False)
    password = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        db_table = 'users'

    def __str__(self):
        return self.display_name
