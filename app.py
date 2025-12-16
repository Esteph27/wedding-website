from flask import Flask, render_template, request, redirect, session, url_for, jsonify
from dotenv import load_dotenv
from helpers import login_required
import os

# Congigure app
app = Flask(__name__)

# Load environment variables from .env (local development only)
# https://pypi.org/project/python-dotenv/
load_dotenv()

# Required for Flask secure `sessions`
# https://flask.palletsprojects.com/en/latest/quickstart/#sessions
app.secret_key = os.getenv("FLASK_SECRET_KEY")

# Get password
PASSWORD = os.getenv("PASSWORD")
# check password is set
if PASSWORD is None:
    raise RuntimeError("PASSWORD environment variable not set!")


@app.route("/", methods=["GET", "POST"])
def index():
    '''
    Login page
    
    - GET: render login form
    - POST: validate password and create authenticated session
    
    Authentication state is stored in the Flask session.
    '''
    
    if request.method == "POST":
        password = request.form.get("password", "").strip().lower()
        
        if PASSWORD is None:
            return jsonify({"success": False, "error": "server misconfigured"}), 500

        if password == PASSWORD.lower():
            session["authenticated"] = True
            # redirect is handled in login.js
            return jsonify({"success": True})
        else:
            return jsonify({"success": False})

    return render_template("index.html", show_footer=False)
 

@app.route("/home")
@login_required
def home():
    return render_template("home.html", show_footer=True, delay_footer=True)


@app.route("/rsvp")
@login_required
def rsvp():
    return render_template("rsvp.html", show_footer=True)


@app.route("/travel")
@login_required
def travel():
    return render_template("travel.html", show_footer=True)


@app.route("/airbnb")
@login_required
def airbnb():
    return render_template("airbnb.html", show_footer=True)


@app.route("/deal")
@login_required
def deal():
    return render_template("deal.html", show_footer=True)


@app.route("/schedule")
@login_required
def schedule():
    return render_template("schedule.html", show_footer=True)


@app.route("/dress-code")
@login_required
def dress_code():
    return render_template("dress-code.html", show_footer=True)

@app.route("/faq")
@login_required
def faq():
    return render_template("faq.html", show_footer=True)

@app.route("/registry")
@login_required
def registry():
    return render_template("registry.html", show_footer=True)

# Entry point
if __name__ == "__main__":
    # Debug mode should be disabled in production
    # https://flask.palletsprojects.com/en/latest/deploying/
    app.run(debug=True)
