from rest_framework.viewsets import ViewSet
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth.hashers import make_password, check_password
from django.conf import settings
import jwt
from calibra_api.models.user import User
from calibra_api.serializers.user_serializers import UserRegistrationSerializer, UserLoginSerializer
from rest_framework.decorators import action


class UserViewSet(ViewSet):
    """
    ViewSet for user authentication: registration and login.
    """

    def error_response(self, message, status_code):
        """
        Returns a consistent error response with a single error message.
        """
        return Response({"error": message}, status=status_code)

    @action(detail=False, methods=['post'])
    def register(self, request):
        serializer = UserRegistrationSerializer(data=request.data)

        if not serializer.is_valid():
            first_error_message = list(serializer.errors.values())[0][0]
            return self.error_response(first_error_message, status.HTTP_400_BAD_REQUEST)

        email = serializer.validated_data["email"]
        if User.objects.filter(email=email).exists():
            return self.error_response("Email already in use", status.HTTP_400_BAD_REQUEST)

        user = serializer.save()
        payload = {
            "user_id": user.id,
            "email": user.email,
            "display_name": user.display_name
        }
        token = jwt.encode(payload, settings.SECRET_KEY, algorithm="HS256")

        return Response({"user": payload, "token": token}, status=status.HTTP_201_CREATED)

    @action(detail=False, methods=['post'])
    def login(self, request):
        serializer = UserLoginSerializer(data=request.data)

        if not serializer.is_valid():
            first_error_message = list(serializer.errors.values())[0][0]
            return self.error_response(first_error_message, status.HTTP_400_BAD_REQUEST)

        email = serializer.validated_data["email"]
        password = serializer.validated_data["password"]

        try:
            user = User.objects.get(email=email)

            if check_password(password, user.password):
                payload = {
                    "user_id": user.id,
                    "email": user.email,
                    "display_name": user.display_name
                }
                token = jwt.encode(payload, settings.SECRET_KEY, algorithm="HS256")

                return Response({"user": payload, "token": token}, status=status.HTTP_200_OK)

        except User.DoesNotExist:
            pass

        return self.error_response("Invalid email or password", status.HTTP_401_UNAUTHORIZED)
