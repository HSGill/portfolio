import React from 'react';
import Projects from './Projects';

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
         'Authorization': 'Bearer ' + 'f37457acc423764b825fd830bc52084d8b7ba382', 
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
      {/* <Particles className='particles' params={particlesOptions}></Particles> */}
        <Projects projGit={this.state.proj}></Projects>
        
      </div>
    );
  }
}

export default Home;
