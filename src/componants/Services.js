

function Services(serv){
    return(
         <li>
                <img src={serv.img} alt="" />
                <h2>{serv.h2}</h2>
                <p>{serv.p}</p>
            </li>
    )
}

export default Services;