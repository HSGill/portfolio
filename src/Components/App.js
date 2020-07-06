import React from 'react';
import Cover from './Cover';
import Projects from './Projects';
import Particles from 'react-particles-js';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';

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
        <div className="logo"></div>
        <div className="description"></div>

        </div>
        <div className="right">
         {/*Right Top Panel */}
        <div className="right-top">sadsad</div>
         {/*Right Bottom Panel */}
        <div className="right-bottom">Hello</div>
        </div>
        
      </div>
    );
  }
}

export default App;
