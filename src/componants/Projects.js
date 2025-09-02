

function Projects(project){
    return(
        <div className="my_work_view">
            <div>
                <h3>{project.id}</h3>
                <h1>{project.title}</h1>
                <p>{project.discr}</p>
            </div>
            <div className="my_work_view_img">
                <img src={project.urlimg} alt="" />
            </div>
        </div>
    )
}

export default Projects;