import Addition from './Addition.webp'
import Subtract from './Subtract.png'
import Multiply from './Multiply.avif'
import Division from './Divide.png'

function Spinners(){

    return(

        <div>
            <img src={Addition} className='Add_spinner' alt="add_spinner" />
            <img src={Division} className='Add_spinner' alt="add_spinner" />
            <img src={Subtract} className='Add_spinner' alt="add_spinner" />
            <img src={Multiply} className='Add_spinner' alt="add_spinner" />
        </div>

       

    )

}

export default Spinners