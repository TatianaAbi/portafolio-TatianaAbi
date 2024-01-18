import '../styles/Header.css'
import { ArticleContainer } from './ArticleContainer'
import { HeaderInfo } from './HeaderInfo'
import { ImgContent } from './ImgContent'


function Header() {
    return(
     <div className="Header">
        <div className="header-shallow">
          <section className="perfil"> 
                  <ArticleContainer>
                        <ImgContent style={'circule-photo'}/> 
                        <HeaderInfo/>
                  </ArticleContainer>
          </section> 
         
      </div>

    </div>
    )
}

export {Header}