import React from 'react';
import './Nav.css';


const Nav =()=>{

    return(
    <nav className="sticky wrapper">
     <ul className="wrapper">
        <li className="home "><a href="./">LOGO</a></li>
        <li><a href="./">Home</a></li>
        <li><a href="./">Projects</a></li>
        <li><a href="./">About</a></li>
     </ul>
     
    </nav>
    )
}



export default Nav;