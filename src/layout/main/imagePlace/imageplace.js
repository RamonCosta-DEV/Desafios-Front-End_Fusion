import './imageplace.sass'
import image from '../../../IMG/1716701745128.png'

export default function Img(){
    return(
        <div className='container'>
            <div className='container__image'>
                <img src = {image} className='image'/>
            </div>
        </div>

    )
}