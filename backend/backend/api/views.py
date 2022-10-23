from django.shortcuts import render
from .serializers import GameSerializer
from rest_framework import response ,generics,decorators,filters
from lobby.models import Game
# Create your views here.
class GameListCreateApiView(generics.ListCreateAPIView):
    serializer_class = GameSerializer
    queryset = Game.objects.all().order_by('-id')
    filter_backends = (filters.SearchFilter,)
    search_fields = ['name',]
    def perform_create(self, serializer):
        serializer.save()
@decorators.api_view(['DELETE'])
def game_delete_api_view(request , pk) :
    try :
        game = Game.objects.get(pk=pk)
        game.delete()
        return response.Response(status = 204)
    except :
        return response.Response(status=404)