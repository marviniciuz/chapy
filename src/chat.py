from flask import Flask
from flask_socketio import SocketIO,emit

app = Flask(__name__)
socketio = SocketIO(app)

@app.route("/")
def hello():
    return open('index.html').read()

@socketio.on('message')
def messagereceived(data):
    emit('message',data)

if __name__ == '__main__':
    socketio.run(app,'127.0.0.1',3000)