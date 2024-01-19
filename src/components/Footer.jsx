import '../styles/Footer.css'
import { Email } from './Email'
import { SocialLinksContainer } from './SocialLinksContainer'

function Footer() {
    return(
     <div className="footer-container">
            <SocialLinksContainer />
            <Email />
        </div>

    )
}
export {Footer}