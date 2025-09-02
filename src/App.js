// import logo from './logo.svg';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Title from './componants/Title_divs';
import Profile from './componants/Profile';
import AboutMe from './componants/aboutMe';
import Services from './componants/Services';
import MyWork from './componants/MyWork';
import Projects from './componants/Projects';
import Scroll from './componants/Scroll';
import Skils from './componants/Skils';
import ContactMe from './componants/ContactMe';
import DownBar from './componants/DownBar';
import NavBar from './componants/NavBar';
import imgSer1 from './componants/img/search-engine_3110271.png';
import imgSer2 from './componants/img/web-design_13191231.png';
import imgSer3 from './componants/img/search_16587037.png';
import imgSer4 from './componants/img/service_18331806.png';
import imgSer5 from './componants/img/react.png';
import imgSer6 from './componants/img/25876192_7100372.png';
import imgSer7 from './componants/img/357319339_0ecca09a-5687-4cb3-a6dc-e16a229d2ea6.png';
import imgWork1 from './componants/img/hr-project.png';
import imgWork2 from './componants/img/Room-View.png';
import imgSkils1 from './componants/img/html.png';
import imgSkils2 from './componants/img/css.png';
import imgSkils3 from './componants/img/js.png';
import imgSkils4 from './componants/img/react.png';
import imgSkils5 from './componants/img/gethup.png';
import imgSkils6 from './componants/img/git.png';

function App() {
    const serv_li = [
    {img :imgSer1 , h2:'Website Development' , p:'creating responsive, modern websites using the latest technologies and best practices for optimal user experience for optimal user experience and performance'},
    {img :imgSer5 , h2:'React Application' , p:'Building interactive single-page applications with React, focusing on component reusability, state management, and optimal performance.'},
    {img :imgSer2 , h2:'UI/UX Implementation' , p:'Transforming design mockups into pixel-perfect, interactive interfaces that provide exceptional user experiences across all devices.'},
    {img :imgSer6 , h2:'API Connection' , p:'Connecting applications with APIs to enable dynamic data, real-time updates, and seamless functionality..'},
    {img :imgSer7 , h2:'Multilingual & Dark/Light' , p:'Websites that support both Arabic (RTL) and English, with an option to switch between light and dark modes for better user experience'},
    {img :imgSer3 , h2:'Website Optimization' , p:'Improving website speed, SEO performance, and accessibility to ensure your site ranks well and provides great user experience.'},
    {img :imgSer4 , h2:'Maintenance & Support' , p:'Providing ongoing maintenance, updates, bug fixes, and technical support to keep your website running smoothly and securely'},
                  ]

  const work_li = [
    {img:imgWork1, h3:'PROJECT 1', h1:'Website HR SYSTEM', p:'Human Resource Management System Website'},
    {img:imgWork2, h3:'PROJECT 2', h1:'Website Hotel Reservation', p:'an integrated website for hotel reservation in aden'},
  ]            
  const skils = [
    {img:imgSkils1 , h1:'HTML5'},
    {img:imgSkils2 , h1:'CSS'},
    {img:imgSkils3 , h1:'JavaScript'},
    {img:imgSkils4 , h1:'REACT'},
    {img:imgSkils5 , h1:'GITHUP'},
    {img:imgSkils6 , h1:'GIT'},
  ]    
  return (
    <div className="App">
      <header>
       <NavBar/>
        <Profile/>
      </header>
      <Scroll />
      <AboutMe />
      <div id='Services' className='Services'>
         <Title name = 'latest Services' span = 'Services'/>
         <ul>
          {serv_li.map((ser) =>(
            <Services 
            img ={ser.img}
            h2 = {ser.h2}
            p = {ser.p} />
          ))}
          </ul>
      </div>
       <div id="my_work" className="my_work">
        <Title name = 'latest works' span = 'Project'/>
        {work_li.map((works)=>(
          <MyWork
           img = {works.img}
           h3 = {works.h3}
           h1 = {works.h1}
           p = {works.p} />
        ))}
         {work_li.map((works)=>(
          <Projects
           img = {works.img}
           h3 = {works.h3}
           h1 = {works.h1}
           p = {works.p} />
        ))}
       </div>
      <div id="my_skils" class="my_skils">
        <Title name = 'latest skils' span = 'Skils' />
        <div class="my_skils_icon">
           <ul>{skils.map((skils_li)=>(
            <Skils
            img = {skils_li.img}
            h1 = {skils_li.h1} />
           ))}</ul>
        </div>
      </div>
      <ContactMe/>
      <DownBar/>
    </div>
  );
}

export default App;
