import { Link } from "react-router-dom"



const ProjectLinks = ({post,setview})=>{
    return(
    <>
    <span> <Link to={post.slug} className="optionsSection" onClick={()=> setview(true)}>{post.linkName}</Link>  </span>
    </>
    )
}
export{ProjectLinks}