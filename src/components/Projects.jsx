


import { useParams } from "react-router-dom"
import {portafolioData} from "./portafolioData.js"
import "../styles/Projects.css"
import { ImgContent } from "./ImgContent.jsx"
import { InfoBox } from "./InfoBox.jsx"

function Projects() {
    const {slug}= useParams()
    const blogData = portafolioData.find(post => post.slug ===slug )


    return( 
        <div className="carrusel">
        {blogData.projects.map((project, index) =>(
            <div className="elemento" key={index} >
                <picture className="project-img">
                    <ImgContent img={project.img}  />
                </picture>
                
                <div className="project-description">
                    <InfoBox sentence={project.text} title={project.title} />
                </div>

        </div>
        ))}
        
      
    </div>  
    )
}


export {Projects}