from functools import wraps
from flask import redirect, url_for, session


def login_required(f):
    '''
    Login requied decorator for routes

    https://flask.palletsprojects.com/en/latest/patterns/viewdecorators/
    '''

    @wraps(f)
    def decorated_function(*args, **kwargs):
        if not session.get("authenticated"):
            return redirect(url_for("index"))
        return f(*args, **kwargs)

    return decorated_function
