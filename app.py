from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def index():
    # TODO: handle password more securely
    return render_template("index.html")

@app.route("/home")
def home():
    return render_template("home.html")

@app.route("/rsvp")
def rsvp():
    return render_template("rsvp.html")

@app.route("/travel")
def travel():
    return render_template("travel.html")

@app.route("/airbnb")
def schedule():
    return render_template("airbnb.html")

if __name__ == "__main__":
    app.run(debug=True)
