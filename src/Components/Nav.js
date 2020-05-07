import React from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';

class Nav extends React.Component{
constructor(props){
    super(props);
}
render(){

    return(
    <nav className="sticky wrapper">
  
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