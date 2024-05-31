import { BrowserRouter,Router,Route, Routes} from "react-router-dom";
import Home from "./Home";
import Galeria from "./galeria";
import Formulario from "./formulario";

function RoutesApp(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/galeria" element={<Galeria/>}/>
            <Route path="/Formulario" element={<Formulario/>}/>
        </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;