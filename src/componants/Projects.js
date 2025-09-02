

function Projects(project){
    return(
        <div className="my_work_view2">
            <div className="my_work_view_img2">
                <img src={project.img} alt="" />
            </div>
            <div>
                <h4>{project.h3}</h4>
                <h3>{project.h1}</h3>
                <p>{project.p}</p>
            </div>
        </div>
    )
}

export default Projects;