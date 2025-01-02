from rest_framework.routers import DefaultRouter
from calibra_api.views.auth_views import UserViewSet

router = DefaultRouter()
router.register(r'users', UserViewSet, basename='users')

urlpatterns = router.urls
