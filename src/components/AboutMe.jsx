import { Link } from "react-router-dom"
import '../styles/AboutMe.css'
import ImgCat from "../img/gato.png"
import ImgDefault from "../img/default.png"

function AboutMe() {
    
    return(
        <>
        <div className="AboutMe">
        <section className="about-sections">
            <div className="cat-container">
                <img src={ImgCat} alt="perrito"/>
            </div>
            <div>
                <div className="hello">Hello, I am a web application developer in Peru.</div>
            </div>
            <div className="presentation">
                <div className="My-name">
                    <h2 >tatiana abigail</h2>
                    <p>(frontent development)</p>
                </div>
                <div className="container-img">
                    <img src={ImgDefault} alt='foto'/>
                </div>
            </div>
            <div>
                <div className="greeting">
                    <h2>work</h2>
                    <p>Soy Tatiana Abigail, una desarrolladora frontend apasionada y creativa, cuya fascinación por la tecnología y el diseño se fusionan para crear experiencias digitales interesantes. he cultivado habilidades destacadas en la implementación de soluciones modernas utilizando tecnologías líderes como React y Vue.</p>
                </div>
                <div className="container-btn-contacts">
                    <Link to='/contact' className='btn-contact'>contact</Link>
                </div>
            </div>
            <div className="bio">
                <h2>Bio</h2>
                <ul>
                    <li> <span>2004</span> Born in Lima Peru</li>
                    <li><span>11/12/2004</span>birthday</li>
                </ul>
                
            </div>
            <div className="aboutme">
                <h2>AboutMe</h2>
                <p>Mi viaje en el mundo del desarrollo web comenzó con la exploración de HTML y CSS en mis años formativos, y desde entonces, he evolucionado constantemente para mantenerme al tanto de las últimas tendencias y prácticas en la industria. 
                   no solo programo, sino que también me sumerjo en el proceso creativo de diseñar mis propias páginas. Esta dualidad de habilidades me permite no solo entender la lógica del código, sino también conceptualizar y dar vida a interfaces visualmente atractivas</p>
            </div>
            <div className="likes">
                <h2>I like</h2>
                <p>art, pop music, videogames, dogs,spend time with my friends</p>
            </div>
        </section>
        <section className='c'>
            <p>© tatiana abigail, quispe hilario ,Peru</p>
        </section>
        </div>
        </>
        
    )
}

export {AboutMe}