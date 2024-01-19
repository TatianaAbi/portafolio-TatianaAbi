import { ImgContent } from "./ImgContent"
import '../styles/BoxPresentation.css' 

function BoxPresentation(){
    return(
        <div className="presentation">
            <div className="My-name">
                <h2 >tatiana abigail</h2>
                <p>(frontent development)</p>
            </div>
            <ImgContent style={'circule-photo-min'}  />
        </div>
    )
}export {BoxPresentation}