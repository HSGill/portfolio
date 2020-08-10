import React from 'react';
import Home from './Home';

import Particles from 'react-particles-js';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

//import logo from './logo.svg';
import './App.css';
import Nav from './Nav.js';
import Footer from './Footer.js'
import HomePage from './HomePage';
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
    this.state = {
      route: 'home'
    }
  }
  onClickProjects = (event)=>{
    this.setState({route:'projects'})
    console.log(this.state.route);
  }
  render() {
    return (
     <div className="container">
      {/* <Particles className='particles' params={particlesOptions}></Particles> 
      <Nav></Nav>      
      <Cover> </Cover> 
      <Footer ></Footer>*/}
      {/*Left Panel */}
      <Switch>
      <Route exact path='/portfolio' component={HomePage} ></Route>
      <Route exact path='/projects' component={Home}></Route>
      </Switch>
</div>
       );
  }
}

export default App;
