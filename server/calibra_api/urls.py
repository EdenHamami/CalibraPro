from rest_framework.routers import DefaultRouter
from calibra_api.views.auth_views import UserViewSet
from calibra_api.views.device_views import DeviceViewSet
from calibra_api.views.model_view import ModelViewSet
from calibra_api.views.prefix_view import PrefixViewSet
from calibra_api.views.measurement_views import MeasurementViewSet

router = DefaultRouter()
router.register(r'users', UserViewSet, basename='users')
router.register(r'devices', DeviceViewSet, basename='device')
router.register(r'models', ModelViewSet, basename='model')
router.register(r'prefixes', PrefixViewSet, basename='prefix')
router.register(r'measurements', MeasurementViewSet, basename='measurement')
urlpatterns = router.urls
