from django.shortcuts import render
from .serializers import GameSerializer
from rest_framework import response ,generics
from lobby.models import Game
# Create your views here.
class GameListCreateApiView(generics.ListCreateAPIView):
    serializer_class = GameSerializer
    queryset = Game.objects.all()