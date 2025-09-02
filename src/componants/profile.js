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
                        <li><a href='https://github.com/essam-developer'><i className="fa-brands fa-github"></i></a></li>
                        <li><a href='https://www.linkedin.com/in/essam-zuhair-322203382?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'><i className="fa-brands fa-linkedin"></i></a></li>
                        <li><a href='https://www.facebook.com/share/17EZ8AcZ58/'><i className="fa-brands fa-facebook"></i></a></li>
                        <li><a href='https://www.instagram.com/e3z_564?igsh=MTUzOTFjeW9tOG96NA=='><i className="fa-brands fa-instagram"></i></a></li>
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