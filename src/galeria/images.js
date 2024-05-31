import { useEffect,useState } from "react";
import { createClient } from "pexels";
import'./_images.sass'
export default function Images(){
    const [curatedPhotos,setCuratedPhotos]= useState([])
    
    useEffect(()=>{
        const client = createClient('6AcnUAI567psaSv3drrJf2EULgh2a5AeFnld1GGxgeK7ezQXvamXR7J3')
        client.photos
        .curated()
        .then((res)=>{
            console.log(res);
        setCuratedPhotos(res.photos)})
    },[])
    return(
        <div>
            <div className="container">
                {curatedPhotos.map(el=>(
                    <div className="imageDiv" key={el.id}>
                        <img className="img"src={el.src.landscape} alt={el.alt}/>
                    </div>
                ))}
            </div>
        </div>
    )
}