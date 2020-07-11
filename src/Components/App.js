import React from 'react';
import Cover from './Cover';
import Home  from './Home';
import Projects from './Projects';
import Particles from 'react-particles-js';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import image from "../images/HG-logo.png";
import cv from "../images/cv.png";

import github from "../images/Octocat.png";

import linkedin from "../images/LI-In-Bug.png";

import message from "../images/message.png";
import profile from "../images/profile.png";



//import logo from './logo.svg';
import './App.css';
import Nav from './Nav.js';
import Footer from './Footer.js'

const particlesOptions = {
  particles: {
    number: {
      value: 50,
      density: {
        enable: true,
        value_area: 800
      }
    },
    "size": {
      "value": 2
  }
    
  }
}

class App extends React.Component {
  constructor(props) {
    super();
    this.state ={
      route:'home'
    }
  }

  render() {
    return (
      <div className="container">
      {/* <Particles className='particles' params={particlesOptions}></Particles> 
        <Nav></Nav>      
        <Cover> </Cover> 
        <Footer ></Footer>*/}
        {/*Left Panel */}
   <div className="left">
   <img className="logo" src={image} alt="portfolio" ></img>  
   <div className="intro">
   <p>Hi, I'm <span>Harry</span></p>
  
   <img className="profile" src={profile} alt="portfolio" ></img>  

   <div className="links">
<a href="https://github.com/HSGill/" target="_blank">

   <img className="" src={github} alt="portfolio" ></img>  
</a>
<a href="https://www.linkedin.com/in/harjotgill73/"target="_blank">

   <img className="" src={linkedin} alt="portfolio" ></img>  
</a>
<a href="" target="_blank">

   <img className="" src={message} alt="portfolio" ></img>  
</a>
   <a href="" target="_blank">
  
   <img className="" src={cv} alt="portfolio" ></img>
</a>
   </div>  
   </div> 
   </div>
  
   <div className="right">
   <div className="right-top"><h2>About Me</h2></div>
   <div className="right-bottom"><h2>Projects</h2></div>
       </div> 
   </div>
    );
  }
}

export default App;
