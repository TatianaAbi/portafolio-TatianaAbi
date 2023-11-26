import '../styles/DefaultProjects.css'
import CatImg from "../img/gato.png"

function DefaultProjects() {
    return(
        <div className="defaultComponentProjects"> 
           <div className='defaultComponent'>
            <div className='gatito'>
                <img src={CatImg} alt="gatito"/>
            </div>
            <p>some of my projects</p>
           </div>
            
        </div>
    )
}
export{DefaultProjects}