import { Nav } from "./Nav"
import "../styles/Contact.css"
import { SocialLinksContainer } from "./SocialLinksContainer";
import { InfoBox } from "./InfoBox";
import { ImgContent } from "./ImgContent";
import { ContainerInfo } from "./ContainerInfo";

function Contact() {
    return(
        <>
         <Nav />
        <div className="contact">
            <article>
                <ImgContent img={'https://cdn-icons-png.flaticon.com/512/7745/7745954.png'}/>

                <ContainerInfo>
                    <InfoBox title='Social Networks' sentence='i like this social network' styleContainer='center'/>
                    <SocialLinksContainer />
                </ContainerInfo>
                
            </article>
        </div>
        </>
    )
}

export {Contact}