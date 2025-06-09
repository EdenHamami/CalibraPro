from decouple import config
from pathlib import Path

# Base directory of the project
BASE_DIR = Path(__file__).resolve().parent.parent

# Secret key for encryption (should be kept private in production)
SECRET_KEY = 'django-insecure-10cm81^l1g^yw=edpy#9nol##f%ces*=g!(2ae)x(8*op7jaj0'

# Debug mode (should be False in production)
DEBUG = True

# Allowing all hosts (for development)
ALLOWED_HOSTS = ['*']

# Use a custom user model defined in calibra_api/models.py
AUTH_USER_MODEL = 'calibra_api.User'

# Installed applications (Django apps and 3rd-party packages)
INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'calibra_api',         # Your main app
    'rest_framework',      # Django REST Framework for APIs
    'corsheaders',         # Handles CORS for frontend-backend communication
]

# Middleware (processes incoming requests)
MIDDLEWARE = [
    "corsheaders.middleware.CorsMiddleware",  # Enables CORS
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
    'calibra_api.middleware.authentication.AuthenticationMiddleware'  # Custom auth middleware
]

# Root URL configuration file
ROOT_URLCONF = 'calibrapro.urls'

# Template engine configuration (used for rendering HTML if needed)
TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

# WSGI application used for deployment
WSGI_APPLICATION = 'calibrapro.wsgi.application'

# MySQL database configuration using environment variables
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': config('DB_NAME'),
        'USER': config('DB_USER'),
        'PASSWORD': config('DB_PASSWORD'),
        'HOST': config('DB_HOST', default='127.0.0.1'),
        'PORT': config('DB_PORT', default='3307'),
    }
}

# Password validation rules
AUTH_PASSWORD_VALIDATORS = [
    {'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator'},
    {'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator'},
    {'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator'},
    {'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator'},
]

# Language and timezone
LANGUAGE_CODE = 'en-us'
TIME_ZONE = 'UTC'
USE_I18N = True
USE_TZ = True

# Static files (CSS, JS, images)
STATIC_URL = 'static/'

# Default primary key type for models
DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'

# CORS configuration (allow frontend requests during development)
CORS_ALLOW_ALL_ORIGINS = True
CORS_ALLOW_CREDENTIALS = True
CORS_ALLOW_METHODS = [
    "GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"
]
CORS_ALLOW_HEADERS = [
    "Authorization", "Content-Type", "X-CSRFToken"
]

# Django REST Framework configuration
REST_FRAMEWORK = {
    "DEFAULT_AUTHENTICATION_CLASSES": [
        "rest_framework.authentication.TokenAuthentication",
    ]
}
