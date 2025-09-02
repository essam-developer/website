// import logo from './logo.svg';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Title from './componants/Title_divs';
import Profile from './componants/profile';
import About_me from './componants/about_me';
import Services from './componants/Services';
import My_work from './componants/My_work';
import Scroll from './componants/Scroll';
import Skils from './componants/Skils';
import Contact_me from './componants/Contact_me';
import Down_bar from './componants/Down_bar';
import Nav_bar from './componants/Nav_bav';

function App() {
    const serv_li = [
    {img :'../img/search-engine_3110271.png' , h2:'Website Development' , p:'creating responsive, modern websites using the latest technologies and best practices for optimal user experience for optimal user experience and performance'},
    {img :'../img/web-design_13191231.png' , h2:'UI/UX Implementation' , p:' responsive, modern websites using the latest technologies and best practices for optimal user experience for optimal user experience and performance'},
    {img :'../img/search_16587037.png' , h2:'Website Optimization' , p:' responsive, modern websites using the latest technologies and best practices for optimal user experience for optimal user experience and performance'},
    {img :'../img/service_18331806.png' , h2:'Maintenance & Support' , p:' responsive, modern websites using the latest technologies and best practices for optimal user experience for optimal user experience and performance'},
                  ]

  const work_li = [
    {img: '../img/hr-project.png', h3:'PROJECT 1', h1:'Website HR SYSTEM', p:'Human Resource Management System Website'},
    {img: '../img/Screenshot (66).png', h3:'PROJECT 2', h1:'Website Hotel Reservation', p:'an integrated website for hotel reservation in aden'},
  ]            
  const skils = [
    {img:'../img/html.png' , h1:'HTML5'},
    {img:'../img/css.png' , h1:'CSS'},
    {img:'../img/js.png' , h1:'JavaScript'},
    {img:'../img/react.png' , h1:'REACT'},
    {img:'../img/gethup.png' , h1:'GITHUP'},
    {img:'../img/git.png' , h1:'GIT'},
  ]    
  return (
    <div className="App">
      <header>
       <Nav_bar/>
        <Profile/>
      </header>
      <Scroll />
      <About_me />
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
          <My_work
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
      <Contact_me/>
      <Down_bar/>
    </div>
  );
}

export default App;
