import { Link } from "react-router-dom"
import "../styles/button.css"

function Button({link,name}){
    return(
        <div className="button-container">
            <Link to={`/${link}`} className="btn">{name}</Link>
        </div>
    )
}

export {Button}