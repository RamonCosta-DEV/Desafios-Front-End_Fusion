import './_footer.sass'
import '../nav/_nav.sass'
import { Link } from 'react-router-dom'

export default function Footer(){
    return(
        <div className='nav'>
            <ul className="nav__item">
                <li ><a href="https://www.linkedin.com/in/ramon-costa-araújo-267615248" target="_blank" className='item'>Linkedin</a></li>
                <li><a href="https://github.com/RamonCosta-DEV" target="_blank" className='item'>Github</a></li>
            </ul>
        </div>
    )
}