import React from 'react';
import Cover from './Cover';
import Projects from './Projects';
import Particles from 'react-particles-js';
//import { Route, Link, BrowserRouter as Router } from 'react-router-dom';

//import logo from './logo.svg';
import './App.css';
import Nav from './Nav.js';
import Footer from './Footer.js'
import Fade from 'react-reveal/Fade';


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
  }
  render() {
    return (
      <div className="container">
      <Particles className='particles' params={particlesOptions}></Particles>
<Nav></Nav>
 <Cover></Cover>
 <Projects></Projects>

 <Fade><Footer></Footer></Fade>
        
      </div>
    );
  }
}

export default App;
