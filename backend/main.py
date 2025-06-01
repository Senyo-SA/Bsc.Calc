from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

class CalculationRequest(BaseModel):
    expression: str

@app.post("/calculate")
def calculate(req: CalculationRequest):
    expression = req.expression
    try:
        result = eval(expression)
        return {"result": result}
    except:
        return {"error": "Invalid expression"}