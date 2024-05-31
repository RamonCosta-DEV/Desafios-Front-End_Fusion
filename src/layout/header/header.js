import "./_header.sass";
import logo from '../../IMG/Logo.png'
import Nav from "../nav/nav.js";

export default function Header(){
    return(
        <div className="header">
            <div className="image-container">
                <a>
                <img src={logo} className="img"/>
                </a>
                
                </div>
            <div className="menu">
                <Nav opt1="Sobre mim" opt2="Galeria" opt3="Formulario"/>
            </div>
        </div>
    )
}