from flask import Flask, render_template, request, redirect, session, url_for, jsonify
import os

app = Flask(__name__)

# get environment variables
app.secret_key = os.getenv("FLASK_SECRET_KEY")
PASSWORD = os.getenv("PASSWORD")

@app.route("/", methods=["GET", "POST"])
def index():
    '''handle log in'''
    
    if request.method == "POST":
        password = request.form.get("password", "").strip().lower()
        if password == PASSWORD.lower():
            session["authenticated"] = True
            return jsonify({"success": True})
        return jsonify({"success": False})

    return render_template("index.html")


@app.route("/home")
def home():

    if not session.get("authenticated"):
        return redirect(url_for("index"))
    return render_template("home.html")

@app.route("/rsvp")
def rsvp():
    return render_template("rsvp.html")

@app.route("/travel")
def travel():
    return render_template("travel.html")

@app.route("/airbnb")
def airbnb():
    return render_template("airbnb.html")

if __name__ == "__main__":
    app.run(debug=True)
