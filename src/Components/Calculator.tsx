

function Calculate(){

    const numbers: any = [1, 2, 3, '+', 4, 5, 6, '-', 7, 8, 9, 'x', '.', 0, 'C', '÷', 'DEL', '√', '%', '=']
    const display = []

    for(let num:number = 0; num < 20; num++){
        display.push(<button key={num} className="Input">{numbers[num]}</button>)
    }

return(
    <div className="Calculator">

       <form action="get" className="Display_area">  </form>
       
       <div className="Input_area"> {display} </div>


    </div>
)

}

export default Calculate