from channels.generic.websocket import WebsocketConsumer
import json
class GameConsumer(WebsocketConsumer):
    def connect(self):
        self.accept()
        self.send(text_data=json.dumps({
            'type':'connection',
            'message':'connection istablished'
        }))
    def receive(self, text_data=None, bytes_data=None):
        message = json.loads(text_data)
        print(message)
        self.send(text_data=json.dumps({
            'type':'connection',
            'message':message.get('message')
        }))