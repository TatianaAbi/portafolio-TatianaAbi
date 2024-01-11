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
                    <p>Hello, I'm Tatiana Abigail and I'm a frontent developer.
                     worked with javascript for web page development
                     and also using libraries and frameworks like react or vue
                     I also manage the styles and designs of my web pages</p>
                </div>
                <div className="button-container">
                    <Link to="/about" className="btnMoreOfMe">MORE</Link>
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