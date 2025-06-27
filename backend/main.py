from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import uvicorn


class CalculationRequest(BaseModel):
    expression: str

app = FastAPI() 

# Declare the port origin and url for the frontend website 
origins = [
    "http://localhost:3000"
]
 
# Use middleware for security screening 
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=['*'],
    allow_headers=['*']
    )

# generates the default value and information
update = ['0']

# The get function displaying the information
@app.get("/calculate", response_model=CalculationRequest)
def show_display():
    result = CalculationRequest(expression = update[0]) 
    try:
        return result 
    except:
        return {'error': 'empty or invalid'}


# Post function performs calculation on the string and returns the evaluated answer
@app.post("/answer")
def calculate(req: CalculationRequest):
    expression = req.expression
    try:
        # eval function performs calculation on the string expression from the post command
        # check if result has percentage or square root sign

        while True:
            if '%' in expression:
                newInt = expression[expression.index("%") + 1]
                print("found")
            elif '√' in expression:
                print('found2')
        
        expression = eval(expression)
        update[0] = str(expression)
        return str(expression)
    except:
        return {"error": "Invalid expression"}
    

# Main function to run the backend app
if __name__ == "__main__":
    uvicorn.run("main:app", host = "0.0.0.0", port=8000, reload=True)

