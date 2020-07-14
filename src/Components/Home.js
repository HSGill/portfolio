import React from 'react';
import Projects from './Projects';
import image from "../images/HG-logo.png";
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';

//import logo from './logo.svg';
import './Home.css';
class Home extends React.Component {
  constructor(props) {
    super();
    this.state ={
      proj:[],
      route:'home'
    }
  }
  componentDidMount (){
    fetch('https://api.github.com/user/repos', {
      method:'GET',
      headers: {
         'Authorization': 'Bearer ' + '6fe2c1a2443a211ee16d5f4cede63cb9bfff1b93', 
         'Content-Type': 'application/json'
      }
   })
   .then(response=>response.json())
   .then(users=> {this.setState({proj: users})})
   .catch(error=> console.log(error));
  }
  render() {
    return (
      <div className="container">
      <Link style={{  color: 'inherit', textDecoration: 'inherit'}} to='/portfolio'>
       <img className="logo" src={image} alt="portfolio" ></img>
        </Link>

      {/* <Particles className='particles' params={particlesOptions}></Particles> */}
        <Projects projGit={this.state.proj}></Projects>
        
      </div>
    );
  }
}

export default Home;
