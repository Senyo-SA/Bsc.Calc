import Api from '../Api'
import React, { useEffect, useState } from 'react';

function Calculate() {

  const [num_display, setNum_display] = useState('')

  const [digits , setDigits] : any = useState('')

  async function show_num(){
    try{
      const response = await Api.get('/calculate');
      console.log(response)
      setNum_display((response.data.expression));
    }catch(error){
      console.error('error processing numbers', error)
    }
  }
  

  async function show_digits(value: any){

    if (value == '='){

      setNum_display(digits)
      setDigits('')

      try{
        await Api.post('/calculate', {expression: num_display})
        show_num()
      }catch(error){
        console.error('calculation error', error)
      }
    }
    else {
      setDigits(digits + value)
    }
  }



  useEffect(() => {
    show_num();
  }, []);

  // Initialise array of numbers and signs
  const numbers: any = [1, 2, 3, "+", 4, 5, 6, "-", 7, 8, 9, "*", ".", 0, "C", "÷", "DEL", "√", "%", "="];

  // Initialise empty array for button components
  const display = [];

  for (let num: number = 0; num < 20; num++) {
    display.push(
      <button key={num} className="Input" onClick={() => show_digits(numbers[num].toString())}>
        {numbers[num]}
      </button>
    );
  }

  console.log(digits)
  console.log(num_display)


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
