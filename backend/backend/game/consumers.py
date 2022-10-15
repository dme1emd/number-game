from cgitb import text
from channels.generic.websocket import AsyncConsumer
import json
class GameConsumer(AsyncConsumer):
    async def websocket_connect(self, event):
        await self.send({
            "type": "websocket.accept",
        })
        await self.send({
            "type": "websocket.send",
            'text' : json.dumps({
                'message':'connection established !'
            })
        })
        room_id = self.scope.get('url_route').get('kwargs').get('pk')
        self.chat_room = f"room-{room_id}"
        await self.channel_layer.group_add(
            self.chat_room,
            self.channel_name
        )
    async def websocket_receive(self, event):
        try :
            data = json.loads(event['text'])
            type = data.get('type')
            if type == 'make-guess':
                guess = data.get('guess')
                player = data.get('player')
                print(player , guess , type)
                await self.channel_layer.group_send(
                        self.chat_room,
                        {
                            "type": "receive_guess",
                            'text':json.dumps({
                                'guess': guess,
                                'player':player,
                                'type':type
                        })
                    })
            elif type == 'other-player':
                number = data.get('number')
                player = data.get('player')
                player_username = data.get('player_username')
                await self.channel_layer.group_send(
                        self.chat_room,
                        {
                            "type": "other_player",
                            'text':json.dumps({
                                'number': number,
                                'player':player,
                                'type':type,
                                'player_username':player_username
                        })
                    })
        except :
            pass
    async def make_guess(self , event) :
        await self.send(
            {
            'type':'websocket.send' , 
            'text' : event['text']
            }
        )
    async def receive_guess(self , event) :
            await self.send(
            {
            'type':'websocket.send' , 
            'text' : event['text']
            }
        )
    async def other_player(self , event) :
            await self.send(
            {
            'type':'websocket.send' , 
            'text' : event['text']
            }
        )