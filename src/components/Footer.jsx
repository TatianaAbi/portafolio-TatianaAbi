import '../styles/Footer.css'
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";


function Footer() {
    return(
    <>
     <div className="footer-container">
            <section className="social-media-icons">
                        <FaInstagram className='icons'/>
                        <FaFacebook className='icons'/>
                        <FaGithub className='icons'/>
            </section>
            <section className="aditionalInformation">
                <p>my email is @lg3165777.gmail.com</p>
            </section>
        </div>
    </>
    )
}

export {Footer}