import Addition from '../Images/Addition.webp'
import Subtract from '../Images/Subtract.png'
import Multiply from '../Images/Multiply.avif'
import Division from '../Images/Divide.png'

function Spinners(){

    const signs = [Addition, Subtract, Multiply, Division]

    return(

        <div className='Spinners'>
            {signs.map((sign, index) => (
                <img key={index} src={sign} className='Add_spinner' alt="add_spinner" />
            ))}
        </div>

       

    )

}

export default Spinners