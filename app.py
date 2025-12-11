from flask import Flask, render_template, request, redirect, session, url_for, jsonify
from dotenv import load_dotenv
import os

app = Flask(__name__)

# load environment variables from .env for local development
load_dotenv()

# get environment variables
app.secret_key = os.getenv("FLASK_SECRET_KEY")
PASSWORD = os.getenv("PASSWORD")
# check password is set
if PASSWORD is None:
    raise RuntimeError("PASSWORD environment variable not set!")


@app.route("/", methods=["GET", "POST"])
def index():
    '''handle log in'''
    
    if request.method == "POST":
        password = request.form.get("password", "").strip().lower()
        
        if PASSWORD is None:
            return jsonify({"success": False, "error": "server misconfigured"}), 500

        if password == PASSWORD.lower():
            session["authenticated"] = True
            return jsonify({"success": True})  # JSON, redirect is handled in login.js
        else:
            return jsonify({"success": False})

    return render_template("index.html", show_footer=False)


@app.route("/home")
def home():

    if not session.get("authenticated"):
        return redirect(url_for("index"))
    return render_template("home.html", show_footer=True, delay_footer=True)

@app.route("/rsvp")
def rsvp():
    return render_template("rsvp.html", show_footer=True)

@app.route("/travel")
def travel():
    return render_template("travel.html", show_footer=True)

@app.route("/airbnb")
def airbnb():
    return render_template("airbnb.html", show_footer=True)

@app.route("/deal")
def deal():
    return render_template("deal.html", show_footer=True)

if __name__ == "__main__":
    app.run(debug=True)
