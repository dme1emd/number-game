from django.urls import path
from .views import *
urlpatterns = [
    path('lobby/',GameListCreateApiView.as_view()),
]