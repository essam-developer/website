

function Title(title){
    return(
        <div className="my_work_menu">
            <p>{title.name}</p>
            <h2>Explore My Popular <span>{title.span}</span></h2>
        </div>
    )
}

export default Title;