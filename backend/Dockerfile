FROM python:3.11-slim

WORKDIR /app

RUN pip install fastapi uvicorn

COPY  . /app

EXPOSE 8000

CMD ["python", "main.py"]

