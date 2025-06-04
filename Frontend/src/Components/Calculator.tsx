import Api from '../Api'
import React, { useEffect, useState } from 'react';

function Calculate() {

  const [num_display, setNum_display] = useState([])

  async function show_num(){
    try{
      const response = await Api.get('/display');
      setNum_display(response.data);
    }catch(error){
      console.error('error fetching fruits', error)
    }
  }

  const numbers: any = [1, 2, 3, "+", 4, 5, 6, "-", 7, 8, 9, "x", ".", 0, "C", "÷", "DEL", "√", "%", "="];
  const display = [];

  for (let num: number = 0; num < 20; num++) {
    display.push(
      <button key={num} className="Input">
        {numbers[num]}
      </button>
    );
  }

  useEffect(() => {
    show_num();
  }, []);

  console.log(num_display[0])

  return (
    <div className="Calculator">
      <form action="get" className="Display_area">
        
      </form>

      <div className="Input_area"> {display} </div>
    </div>
  );
}

export default Calculate;
