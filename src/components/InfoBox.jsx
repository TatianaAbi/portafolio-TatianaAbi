import '../styles/InfoBox.css'


function InfoBox({title,sentence,styleContainer}){
    return(
        <div className={styleContainer}>
        <h2 className='title-sentence'>{title}</h2>
        <p>{sentence}</p>
        </div>
    )
}

export {InfoBox}