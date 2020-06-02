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
      proj:[]
    }
  }
  componentDidMount (){
    fetch("http://localhost:3001")
    .then(response => response.json())
    .then(users => {this.setState({proj: users})})
    .catch(error=> console.log(error));
  }
  render() {
    return (
      <div className="container">
      {/* <Particles className='particles' params={particlesOptions}></Particles> */}
        <Nav></Nav>
        <Cover> </Cover> 
        <Projects projGit={this.state.proj}></Projects>
        <Footer ></Footer>
      </div>
    );
  }
}

export default App;
