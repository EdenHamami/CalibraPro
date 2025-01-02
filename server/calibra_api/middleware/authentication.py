import jwt
from django.conf import settings
from django.http import JsonResponse
from calibra_api.models.user import User  # עדכני לפי מיקום המודל

class AuthenticationMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response
    def __call__(self, request):
        auth_header = request.headers.get('Authorization')
        if not auth_header or not auth_header.startswith('Bearer '):
            request.user = None
        else:
            try:
                token = auth_header.split(' ')[1]
                payload = jwt.decode(token, settings.SECRET_KEY, algorithms=['HS256'])
                user_id = payload.get('user_id')

                if not user_id:
                    return JsonResponse({'error': 'Invalid token'}, status=401)

                user = User.objects.get(id=user_id)
                request.user = user

            except jwt.ExpiredSignatureError:
                return JsonResponse({'error': 'Token has expired'}, status=401)
            except jwt.InvalidTokenError:
                return JsonResponse({'error': 'Invalid token'}, status=401)
            except User.DoesNotExist:
                return JsonResponse({'error': 'User not found'}, status=404)

        response = self.get_response(request)
        return response
