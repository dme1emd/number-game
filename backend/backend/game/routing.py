from django.urls import path
from .consumers import *
websocket_urlpatterns=[
    path('game/<int:pk>/' , GameConsumer.as_asgi()),
]