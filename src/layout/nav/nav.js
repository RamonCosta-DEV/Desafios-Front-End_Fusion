import "./_nav.sass"
import { Link } from "react-router-dom"
export default function Nav(props){
    return(
        <nav className="nav">
            <ul className="nav__item">
                <li><Link className="item" to="/" >{props.opt1}</Link>  </li>
                <li><Link className="item" to="/galeria">{props.opt2}</Link> </li>
                <li><Link className="item" to="/formulario">{props.opt3}</Link></li>
            </ul>
        </nav>

    )
}