import '../styles/DefaultProjects.css'
import CatImg from "../img/gato.png"

function DefaultProjects() {
    return(
        <div className="defaultComponentProjects"> 
           <div className='defaultComponent'>
            <div className='cat'>
                <img src={CatImg} alt="cat"/>
            </div>
            <p>Some of my projects...</p>
           </div>
            
        </div>
    )
}
export{DefaultProjects}