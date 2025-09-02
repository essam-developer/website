

function Title(title){
    return(
        <div className="my_work_menu">
            <p>{title.name}</p>
            <h1>Explore My Popular <span>{title.span}</span></h1>
        </div>
    )
}

export default Title;