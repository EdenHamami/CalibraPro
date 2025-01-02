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
    ViewSet for user authentication (register and login).
    """

    @action(detail=False, methods=['post'])
    def register(self, request):
        serializer = UserRegistrationSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'message': 'User registered successfully'}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    @action(detail=False, methods=['post'])
    def login(self, request):
        serializer = UserLoginSerializer(data=request.data)
        if serializer.is_valid():
            username = serializer.validated_data['username']
            password = serializer.validated_data['password']

            try:
                user = User.objects.get(username=username)
                if check_password(password, user.password):
                    # יצירת JWT טוקן
                    payload = {
                        'user_id': user.id,
                        'username': user.username
                    }
                    token = jwt.encode(payload, settings.SECRET_KEY, algorithm='HS256')
                    return Response({'token': token}, status=status.HTTP_200_OK)
                else:
                    return Response({'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)
            except User.DoesNotExist:
                return Response({'error': 'User does not exist'}, status=status.HTTP_404_NOT_FOUND)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
