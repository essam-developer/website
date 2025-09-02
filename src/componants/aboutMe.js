import imgAboutMe from './img/IMG-20250622-WA00224.png'
function AboutMe(){
    return(
        <div id="about-me" className="about-me">
        <div className="about_me_img">
            <img src={imgAboutMe} alt="" />
        </div>
        <div className="about_me_text">
            <h1>About me</h1>
            <h2>Senior Web Designer</h2>
            <h2>From Aden</h2>
            <p className="about_me_p">A front-end developer with a passion for transforming creative designs into seamless, interactive digital interfaces. I skillfully use programming languages such as HTML, CSS, and JavaScript, and am currently training in React and Flutter technologies to expand my experience in developing user interfaces and mobile applications, enhancing my ability to provide integrated and advanced software solutions that meet the demands of the modern market. I focus on the user experience from design to final performance, and I work meticulously to implement responsive websites compatible with various devices and browsers, with a great attention to detail and performance optimization to make the browsing experience smooth and enjoyable</p>
        </div>
    </div>
    )
}
export default AboutMe;

window.addEventListener('scroll' , function(){
    const slider = this.document.querySelector('.about_me_img');
    const slider2 = this.document.querySelector('.about_me_text');
    const posation = slider.getBoundingClientRect();
    // const posation2 = slider2.getBoundingClientRect();
    if(posation.top < this.window.innerHeight&& posation.bottom >=0){
        slider.classList.add('active');
        slider2.classList.add('active');
    }
    else{
        slider.classList.remove('active');
        slider2.classList.remove('active');
    }

});