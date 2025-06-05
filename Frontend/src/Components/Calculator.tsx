import Api from '../Api'
import React, { useEffect, useState } from 'react';

function Calculate() {

  const [num_display, setNum_display] = useState('')

  const [digits , setDigits] : any = useState('0')

  function show_digits(value: any){
    console.log(value)
    setDigits(digits + value)

    if (value == '='){
      setDigits(num_display )
    }

    if (value == 'DEL'){
      setDigits('0')
    }
    
  }

  async function show_num(){
    try{
      const response = await Api.get('/display');
      setNum_display((response.data.expression.toString()));
    }catch(error){
      console.error('error fetching fruits', error)
    }
  }

  useEffect(() => {
    show_num();
  }, []);

  const numbers: any = [1, 2, 3, "+", 4, 5, 6, "-", 7, 8, 9, "*", ".", 0, "C", "÷", "DEL", "√", "%", "="];
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
        <input className='Input_Area' placeholder={digits} type='text'/>
      </form>

      <div className="Input_area"> {display} </div>
    </div>
  );
}

export default Calculate;
