import "../styles/ImgContent.css"
import DefaultImg from '../img/default.png'

function ImgContent({img,style}){
    return(
        <div className="Img-box">
            <img className={`${style  ?? 'img-content'}`} src={img ?? DefaultImg } alt="img" />
        </div>
    )
}
export {ImgContent}