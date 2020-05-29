import os
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SECRET_KEY = 'h7hl%sg45ykIjVb$5i8235^67dFfSfj3##2mfAOsd@@3!%x-kr*_-m!7vx_'

DEBUG = False

ALLOWED_HOSTS = ['127.0.0.1']

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': 'drf_db',
        'USER': 'lhzehl',
        'PASSWORD': '1234567890rty0987654321RTY',
        'HOST': 'localhost',
        'PORT': '5432',
    }
}


# STATIC_DIR = os.path.join(BASE_DIR, 'static')
# STATICFILES_DIRS = [STATIC_DIR]
STATIC_ROOT = os.path.join(BASE_DIR, 'static')
