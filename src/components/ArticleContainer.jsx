import '../styles/ArticleContainer.css'

function ArticleContainer({children}){
    return(
        <article className='article-box'>
            {children}
        </article>
    )
}

export {ArticleContainer}