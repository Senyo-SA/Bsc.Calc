import Api from '../Api'
import { useEffect, useState } from 'react';

function Calculate() {

  const [num_display, setNum_display] = useState('')

  const [digits , setDigits] : any = useState('')

  async function show_num(){
    try{
      const response = await Api.get('/calculate');
      setNum_display((response.data.expression));
    }catch(error){
      console.error('error processing numbers', error)
    }
  }


  useEffect(() =>  {
    console.log(digits.replace("√", ""));
    show_num();
  }, [digits.replace("√", "")]);


  async function perform_calc(arithmetic: any){
    try{
      await Api.post('/answer', {expression: arithmetic});
    }catch(error){
      console.error('calculation error', error)
    }
  }
  

  function show_digits(value: any){

    if (value === '='){

      perform_calc(digits)

      setNum_display(digits)
      setDigits('')

      window.location.reload()

    }
    else if (digits[digits.length - 1] === '%'){
      setDigits(digits + value / 100)
    }
    else if (value === 'DEL'){
      setDigits(digits.slice(0, -1))
    }
    else if (value === 'C'){
      setDigits('')
      setNum_display('0')
    }
    else if(digits[digits.length - 1] === "√"){
      setDigits(digits + Math.sqrt(value))
    }
    else {
      setDigits(digits.replace("√", "") + value)
      setDigits(digits.replace("%", "") + value)
    }

  }

  

  // Initialise array of numbers and signs
  const numbers: any = ["C", "DEL", "%", "+", 1, 2, 3, "-", 4, 5, 6, "*", 7, 8, 9, "÷", ".", 0, "√",  "="];

  // Initialise empty array for button components
  const display = [];

  for (let num: number = 0; num < 20; num++) {
    display.push(
      <button key={num} className="Input" onClick={() => show_digits(numbers[num].toString())}>
        {numbers[num]}
      </button>
    );
  }

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
