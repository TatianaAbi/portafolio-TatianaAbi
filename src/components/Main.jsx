import { Link } from "react-router-dom"
import '../styles/Main.css'
import img from '../img/default.png'
function Main({children}) {
    return(
    <>
    <div className="Main-container">

        <section className="article-container">
            <article className="cart-container">
                <div className="cart-img-container">
                    <img src={img} alt="imagen"/>
                </div>
            <div className="description">
            <div className="description-container">
                <div className="moreAboutMe">
                    <h2>About Me</h2>
                </div>
                <div className="info">
                    <p>hola soy tatiana abigail y soy desarrolladora frontent e trabajado con javascript para el desarrollo de paginas web y tambien usando librerias y frameworks como  react o vue tambien manejo los estilos y diseños de mi paginas web             </p>
                </div>
                <div className="button-container">
                    <Link to="/about" className="btnMoreOfMe">MORE            </Link>
                </div>
            </div>
            </div>

            </article>
        </section>
        <section>
        {children}
        </section>

    </div>
    </>
    )
}

export {Main}