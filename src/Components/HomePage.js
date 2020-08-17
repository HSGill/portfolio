import React from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';

import image from "../images/HG-logo.png";
import cv from "../images/cv.png";
import github from "../images/Octocat.png";
import linkedin from "../images/LI-In-Bug.png";
import message from "../images/message.png";
import profile from "../images/profile.png";
import projects from "../images/projects.png";
import opensource from "../images/open-source.png";
//import logo from './logo.svg';
import './App.css';


class HomePage extends React.Component {
  constructor(props) {
    super();
    this.state = {
   
      route: 'home'
    }
  }
 

  render() {
    return (
     <div className="container">
    
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
            
            <a href="https://www.linkedin.com/in/harjotgill73/" target="_blank">

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
        <div className="right-top">
          <div id="about">
            <p >About Me</p>
            <div id="about-me">
<div>I am having experience as full stack
development.I've worked
on multiple projects, and has experience with
end to end
</div> development and deployment of web applications.
</div></div>

<div className="projects" >
<div className="inside-projects">
<Link style={{  color: 'inherit', textDecoration: 'inherit'}} to='/projects'>

<img src={projects} alt="projects"></img>
<p>Projects</p>
</Link>

</div>
<div className="inside-projects"><img src={opensource} alt="opensource"></img>
<p>Open Sourced Libraries</p>
</div>
<div className="inside-projects">
<img src={projects} alt="projects"></img>
<p>Developer Resources</p>
</div>
</div>
        </div>
        <div className="right-bottom"><h2>Projects</h2>
       
        </div>
      </div>
    </div>
       );
  }
}

export default HomePage;
