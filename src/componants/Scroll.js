

function Scroll(){
    return(
        <div className="scroll">
            <button id="scroll_up" className="scroll_up"><i className="fa-solid fa-arrow-up"></i></button>
      </div>
    )
}
export default Scroll;

window.onscroll = function(){
     const scroll_up = document.getElementById('scroll_up');

    if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100){
        scroll_up.style.display = 'block';
    }else{
        scroll_up.style.display = 'none';
    }

    scroll_up.addEventListener('click' , ()=>{
        window.scrollTo({
            top : 0,
            behavior : 'smooth'
        })});
}


