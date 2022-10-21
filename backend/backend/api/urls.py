from django.urls import path
from .views import *
urlpatterns = [
    path('lobby/',GameListCreateApiView.as_view()),
    path('game-delete/<int:pk>/',game_delete_api_view),
]