import React from 'react';
import './Nav.css';

class Nav extends React.Component{
constructor(){
    super();
}
render(){

    return(
    <nav className="sticky">
     <ul className="wrapper">
        <li className="home "><a href="./">Harry</a></li>
        <li><a href="./">Home</a></li>
        <li><a href="./">Projects</a></li>
        <li><a href="./">About</a></li>
     </ul>
    </nav>
       
    )
}

}

export default Nav;