# calibra_api/models/user.py
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin
from django.db import models


class UserManager(BaseUserManager):
    def create_user(self, email, display_name, password=None):
        if not email:
            raise ValueError("Users must have an email address")
        if not display_name:
            raise ValueError("Users must have a display name")

        email = self.normalize_email(email)
        user = self.model(email=email, display_name=display_name)
        user.set_password(password)  # Hash the password
        user.save(using=self._db)
        return user

    def create_superuser(self, email, display_name, password=None):
        user = self.create_user(email=email, display_name=display_name, password=password)
        user.is_staff = True
        user.is_superuser = True
        user.save(using=self._db)
        return user


class User(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(unique=True)
    display_name = models.CharField(max_length=255)
    is_active = models.BooleanField(default=True)  # Required for DRF
    is_staff = models.BooleanField(default=False)  # Required for admin
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    objects = UserManager()

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ["display_name"]

    class Meta:
        db_table = "users"

    def __str__(self):
        return self.display_name
