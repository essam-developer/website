

function My_work(work){
    return(
         <div class="my_work_view">
            <div class="my_work_view_img">
                <img src={work.img} alt="" />
            </div>
            <div>
                <h3>{work.h3}</h3>
                <h1>{work.h1}</h1>
                <p>{work.p}</p>
            </div>
        </div>
    )
}

export default My_work;