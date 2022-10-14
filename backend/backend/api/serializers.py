from lobby.models import Game
from rest_framework import serializers
class GameSerializer(serializers.ModelSerializer):
    class Meta :
        model = Game
        fields = '__all__'