import { ContainerInfo } from "./ContainerInfo"
import { ImgContent } from "./ImgContent"
import notFound from "../img/404.png"

function NotFound() {
    return(
    <>
    <ContainerInfo>
            <ImgContent img={notFound}/>
    </ContainerInfo>
    </>
    )
}

export {NotFound}