import { Nav } from "./Nav"
import { Header } from "./Header"
import { Main } from "./Main"
import { portafolioData } from "./portafolioData"
import {  Outlet } from "react-router-dom"
import { ProjectLinks } from "./ProjectLinks"
import { Footer } from "./Footer"
import "../styles/Home.css"
import { DefaultProjects } from "./DefaultProjects"
import { useState } from "react"

function Home() {
    const [view, setview]= useState(false)

    return(
    <>
    <Nav/>
    <Header/>
    <Main>
    <div className="links-container">
        <div className="links-list">
            {portafolioData.map(post=>(
                <ProjectLinks post={post} key={post.slug} setview={setview} />
            ))}
        </div> 
    </div>
    <div className="visual-container">
        {view ? <Outlet/> : <DefaultProjects/> }
    </div>
    </Main>
    <Footer/>

    </>
    )
}


export {Home}