


import { useParams } from "react-router-dom"
import {portafolioData} from "./portafolioData.js"
import "../styles/Projects.css"

function Projects() {
    const {slug}= useParams()
    const blogData = portafolioData.find(post => post.slug ===slug )


    return( 
        <div className="carrusel">
        {blogData.projects.map((project, index) =>(
            <div className="elemento" key={index}>
          <picture className="project-img">
          <img src={project.img} alt={project.title}/>
          </picture>
        <div className="project-description">
            <h2>{project.title}</h2>
            <p>{project.text}</p>
        </div>
        </div>
        ))}
        
      
    </div>  
    )
}

export {Projects}