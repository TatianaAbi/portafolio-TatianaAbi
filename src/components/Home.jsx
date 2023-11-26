import { Nav } from "./Nav"
import { Header } from "./Header"
import { Main } from "./Main"
import { portafolioData } from "./portafolioData"
import { Outlet } from "react-router-dom"
import { NavLink } from "react-router-dom"
import { Footer } from "./Footer"
import "../styles/Home.css"
function Home() {
    return(
    <>
    <Nav/>
    <Header/>
    <Main>
    <div className="links-container">
                  <div className="lista-de-links">
                        {portafolioData.map(post=>(
                        <ProjectLinks post={post} key={post.slug} />
                        ))}
                  </div> 
                </div>
                <div className="visual-container">
                    <Outlet/>
                </div>
    </Main>
    <Footer/>

    </>
    )
}


const ProjectLinks = ({post})=>{
    return(
        <>
    <span><NavLink to={`/${post.slug}`} className="optionsSection">{post.linkName}</NavLink></span>
    </>
    )
    
}

export {Home}