import { Link } from "react-router-dom"
import '../styles/Header.css'
import img from '../img/default.png'
function Header() {
    return(
    <>
     <div className="Header">
      <div className="header-shallow">
        <section className="perfil">
              <div className="container-perfil">
                <div className="aboutMe">
                    <p className="title">hello</p>
                    <h2 className="my-name"> I am Tatiana </h2>
                    <p className="sentence">Frontend Web Designer & Developer</p>
                    <Link className="btnMore" to="/about">MORE</Link>
                </div>
              <picture className="photo">
              <img src={img} alt="creator"/>
              </picture>
              </div>
        </section>
         
      </div>

    </div>
    </>
    )
}

export {Header}