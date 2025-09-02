import imgProfile from './img/IMG-20250622-WA00224.png'
function Profile(){
    return(
         <div className="img">
            <div>
                <p>Hi There , Iam Essam Zuhair</p>
                <h1>I am <span>Web Developer</span></h1>
                <h1>Front End</h1>
                <p>I work an full time and freelencer</p>
                <a href="#contact_me"><button className="btn">Contact me</button></a>
                <div className="social-media">
                    <ul>
                        <li><i className="fa-brands fa-github"></i></li>
                        <li><i className="fa-brands fa-linkedin"></i></li>
                        <li><i className="fa-brands fa-facebook"></i></li>
                        <li><i className="fa-brands fa-instagram"></i></li>
                    </ul>
                </div>
            </div>
            <div className="img_profile">
                <img src={imgProfile} alt="" />
            </div>
        </div>
    )
}
export default Profile;