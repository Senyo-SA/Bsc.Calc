from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import uvicorn


class CalculationRequest(BaseModel):
    expression: list


app = FastAPI() 


origins = [
    "http://localhost:3000"
]
 
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=['*'],
    allow_headers=['*']
    )

input_list = ['0']

@app.get("/display", response_model=CalculationRequest)
def show_display():
    result = CalculationRequest(expression=(input_list)) 
    try:
        return result 
    except:
        return {'error': 'empty or invalid'}



@app.post("/calculate")
def calculate(req: CalculationRequest):
    expression = req.expression 
    try:
        result = eval(expression)
        return {"result": result}
    except:
        return {"error": "Invalid expression"}
    


if __name__ == "__main__":
    uvicorn.run(app, host='0.0.0.0', port=8000)

