import { useState } from "react";


function NavBar(){
       const [liItem , setliItem] = useState(0);
    const menuItems = [
    { id: 0, i:'fa-solid fa-house', href: "#", label: "Home" },
    { id: 1, i:'fa-solid fa-user', href: "#about-me", label: "About me" },
    { id: 2, i:'fa-solid fa-globe', href: "#Services", label: "Services" },
    { id: 3, i:'fa-solid fa-briefcase', href: "#my_work", label: "Experience" },
    { id: 4, i:'fa-solid fa-list-check', href: "#my_skills", label: "Skills" },
    { id: 5, i:'fa-solid fa-address-card', href: "#contact_me", label: "Contact_me" },
  ];


    const [menuOpen , setmenuOpen] = useState(true);
    const togglemenu =()=>{ 
        setmenuOpen(!menuOpen);
         
    };
    return(
        <>
         <nav>
            <div><h3>Developer <span>Essam</span></h3></div>
            <div className="nav_menu">
                <ul>
                    <li><a href="#about-me"><p>About me</p></a></li>
                    <li><a href="#Services"><p>Services</p></a></li>
                    <li><a href="#my_work"><p>Experience</p></a></li>
                    <li><a href="#my_skills"><p>Skills</p></a></li>
                </ul>
            </div>
            <div className="nav_btn">
                <a href="#contact_me"><button className="btn">Contact me</button></a>
            </div>
            <div className="nav_menu_icon">
                <i onClick={togglemenu} id="btn_menu" className= {menuOpen ? "fa-solid fa-bars" : 'fa-solid fa-xmark'}></i>
            </div>
        </nav>

        <div className={menuOpen ? "open_menu_none" : "open_menu"}>
            <ul>
                {menuItems.map((items)=>(
                    <li key={items.id}  onClick = {()=>setliItem(items.id)} className={liItem === items.id ? 'active' : '' } >
                        <i className={items.i}></i><a href={items.href}><p>{items.label}</p></a>
                    </li>
                ))}
            </ul>
        </div>
        </>
    )
}
export default NavBar;
