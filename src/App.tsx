import './styles.css'
import Spinners from './Components/Wallpage_spin'; 
import Calculate from './Components/Calculator';



function App(){

  const spinning = []

  for(let count = 0; count < 5; count++){
    spinning.push(<Spinners/>)
  }

  return (
  <div className='Wallpage'>

    {spinning}

    <Calculate/>
   

  </div> 
)
}

export default App;