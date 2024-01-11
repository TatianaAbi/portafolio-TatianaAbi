import { Link } from "react-router-dom"
import '../styles/AboutMe.css'
import ImgCat from "../img/gato.png"
import ImgDefault from "../img/default.png"

function AboutMe() {
    
    return(
        <>
        <div className="AboutMe">
        <section className="about-section">
            <div className="cat-container">
                <img src={ImgCat} alt="cat"/>
            </div>
            <div>
                <div className="hello">
                    ¡Hello!, I am a web application developer in Peru.
                </div>
            </div>
            <div className="presentation">
                <div className="My-name">
                    <h2 >tatiana abigail</h2>
                    <p>(frontent development)</p>
                </div>
                <div className="container-img">
                    <img src={ImgDefault} alt='picture'/>
                </div>
            </div>
            <div>
                <div className="greeting">
                    <h2>Work</h2>
                    <p>I am Tatiana Abigail, a passionate and creative frontend developer, whose
                    fascination with technology and design merge to create engaging digital 
                    experiences. She has cultivated outstanding skills in implementing modern 
                    solutions using leading technologies such as React and Vue.</p>
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
                <p>My journey into the world of web development began with exploring HTML and CSS
                in my formative years, and since then, I have constantly evolved to stay abreast 
                of the latest trends and practices in the industry.
                I not only program, but I also immerse myself in the creative process of designing 
                my own pages.
                This duality of skills allows me to not only understand the logic of the code, but
                also conceptualize and bring to life visually attractive interfaces.</p>
            </div>
            <div className="I-likes">
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