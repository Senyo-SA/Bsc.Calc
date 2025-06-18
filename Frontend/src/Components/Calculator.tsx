import Api from '../Api'
import { useEffect, useState } from 'react';

function Calculate() {


  // use state to update the number displayed 
  const [num_display, setNum_display] = useState('')

  // used to update the inputted digits and signs
  const [digits , setDigits] : any = useState('')

  // function calls the api to return the value
  // returns error when unable to return api call
  async function show_num(){
    try{
      const response = await Api.get('/calculate');
      setNum_display((response.data.expression));
    }catch(error){
      console.error('error processing numbers', error)
    }
  }

  // use effect to run function on start and show digits on console
  useEffect(() =>  {
    console.log(digits.replace("√", ""));
    show_num();
  }, [digits.replace("√", "")]);

  // Sends the input to the backend to calculate and return the answer
  async function perform_calc(arithmetic: any){
    try{
      await Api.post('/answer', {expression: arithmetic});
    }catch(error){
      console.error('calculation error', error)
    }
  }
  
  // A function to update the digits and values from click
  // Depending on the digit clicked 
  function show_digits(value: any){

    // Function to return the calculation result when = is clicked by reloading the page
    if (value === '='){

      perform_calc(digits)

      setNum_display(digits)
      setDigits('')

      // reloads the page to get the calculated values from the api
      window.location.reload()

    }

    // returns percentage of the value
    else if (digits[digits.length - 1] === '%'){
      setDigits(digits + value / 100)
    }

    // Deletes the last input 
    else if (value === 'DEL'){
      setDigits(digits.slice(0, -1))
    }

    // Clears all inputs
    else if (value === 'C'){
      setDigits('')
      setNum_display('0')
    }

    // returns the square root of the next input
    else if(digits[digits.length - 1] === "√"){
      setDigits(digits + Math.sqrt(value))
    }

    // updates values without the signs 
    else {
      setDigits(digits.replace("√", "") + value)
      setDigits(digits.replace("%", "") + value)
    }

  }

  

  // Initialise array of numbers and signs
  const numbers: any = ["C", "DEL", "%", "+", 7, 8, 9, "-", 6, 5, 4, "*", 1, 2, 3, "÷", ".", 0, "√",  "="];

  // Initialise empty array for button components
  const display = [];

  // inputs the numbers abd signs and generates the buttons
  // updates to display the digits and signs when clicked
  // updates the answers to display after fetching from api
  for (let num: number = 0; num < 20; num++) {
    display.push(
      <button key={num} className="Input" onClick={() => show_digits(numbers[num].toString())}>
        {numbers[num]}
      </button>
    );
  }

  // Returns GUI for the calculator form
  return (
    <div className="Calculator">
      <form action="get" className="Display_area">
        <input className='Input_Area'  placeholder={num_display} type='text' value={digits}/>
      </form>

      <div className="Input_area"> {display} </div> 
    </div>
  );
}

export default Calculate;
