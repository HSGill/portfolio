import React from 'react';
import './Nav.css';

const Nav =() =>{
    return(
    <nav className="sticky">
     <ul className="wrapper">
        <li className="home"><a href="">Home</a></li>
        <li><a href="">Projects</a></li>
        <li><a href="">About Me</a></li>
     </ul>
    </nav>
       
    )

}
export default Nav;