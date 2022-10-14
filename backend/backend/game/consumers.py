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
                'message':'ea'
            })
        })
        room_id = self.scope.get('url_route').get('kwargs').get('pk')
        self.chat_room = f"room-{room_id}"
        await self.channel_layer.group_add(
            self.chat_room,
            self.channel_name
        )
    async def websocket_receive(self, event):
        data_dict = json.loads(event.get('text'))
        guess = data_dict.get('text')
        print(event)
        await self.channel_layer.group_send(
            self.chat_room,
            {
                'type':'make_guess',
                'text':json.dumps({
                    'message': f'someone sent {guess}'
            })
            }
        )
    async def make_guess(self , event) :
        await self.send(
            {
            'type':'websocket.send' , 
            'text' : event['text']
            }
        )