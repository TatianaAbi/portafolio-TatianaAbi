import { Nav } from "./Nav"
import "../styles/Contact.css"
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";



function Contact() {
    return(
        <>
         <Nav/>
        <div className="contact">
            <article>
                <img src="https://cdn-icons-png.flaticon.com/512/7745/7745954.png" alt="perrito"/>
                <div className="contact-info">
                    <p>my social networks are</p>

                    <div className="container-icons">
                        <FaInstagram className='icons'/>
                        <FaFacebook className='icons'/>
                        <FaGithub className='icons'/>
                        
                    </div>
                </div>
            </article>
        </div>
        </>
    )
}

export {Contact}