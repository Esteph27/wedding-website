# syntax=docker/dockerfile:1

ARG PYTHON_VERSION=3.10.2

FROM python:${PYTHON_VERSION}-slim

LABEL fly_launch_runtime="flask"

WORKDIR /code

COPY requirements.txt requirements.txt
RUN pip3 install -r requirements.txt

COPY . .

EXPOSE 8080

# added by Fly.io - for development
# CMD [ "python3", "-m" , "flask", "run", "--host=0.0.0.0", "--port=8080"]

# Start the Flask app with Gunicorn - for production
CMD ["gunicorn", "app:app", "--bind", "0.0.0.0:8080", "--workers", "3"]
