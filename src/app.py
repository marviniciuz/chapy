from flask import Flask
from flask.app import Flask
from flask.templating import render_template
from flask_socketio import SocketIO

app = Flask(__name__)
io = SocketIO(app)

@app.route("/")
def home():
    return render_template("index.html")

if __name__ == "__main__":
    io.run(app, debug=True)