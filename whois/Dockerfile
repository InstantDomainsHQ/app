FROM python:3.9.18-alpine3.18
ENV FLASK_APP=app.py
ENV FLASK_RUN_HOST=0.0.0.0
COPY app app
COPY requirements.txt requirements.txt
WORKDIR .

RUN pip install --upgrade pip

RUN pip install -r requirements.txt

WORKDIR app

EXPOSE 8181
CMD ["gunicorn", "--worker-class=gevent", "--worker-connections=2500", "--workers=5", "-b 0.0.0.0:8181", "app:app"]