import '../styles/DefaultProjects.css'
import CatImg from "../img/gato.png"
import { ContainerInfo } from './ContainerInfo'
import { ImgContent } from './ImgContent'

function DefaultProjects() {
    return(
        <div className="defaultComponentProjects"> 
        <ContainerInfo>
            <ImgContent img={CatImg} />
            <p>Some of my projects...</p>
        </ContainerInfo>
        </div>

    )
}
export{DefaultProjects}