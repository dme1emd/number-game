from django.urls import path
from .consumers import *
websocket_urlpatterns=[
    path('game/' , GameConsumer.as_asgi()),
]