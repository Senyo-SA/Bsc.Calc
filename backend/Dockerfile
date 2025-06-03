FROM python:3.11-slim

WORKDIR /app

COPY requirements.txt .

RUN pip install -r requirements.txt

COPY  . /app

EXPOSE 3030

CMD ["python", "-m", "uvicorn", "main:app" ]

