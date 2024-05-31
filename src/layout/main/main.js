import './main.sass'
import Text from '../text/text'
import Img from './imagePlace/imageplace'

export default function Main(){
    return(
        <div className="container">
            <div className="textarea">
                <Text />
            </div>
            <div className='imagearea'>
                <Img />
            </div>
        </div>
    )
}