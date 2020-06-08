import React from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';
import Projects from './Projects';
import Cover from './Cover';

class Nav extends React.Component{
constructor(props){
    super(props);
this.state={
    render:''
}
}

handleClick=(compState)=>{
  this.setState({render:compState})
}
displayComponent=()=>{
    switch (this.state.render){
        case 'home': return <Cover></Cover>
        case 'projects': return <Projects></Projects>
    }
}
render(){
    return(
    <nav className="sticky wrapper">
     <ul className="wrapper">
        <li className="home " onClick={this.handleClick('home')}><a href="./">LOGO</a></li>
        <li><a href="./">Home</a></li>
        <li onClick={this.handleClick('projects')}><a >Projects</a></li>
        <li><a href="./">About</a></li>
     </ul>
     {this.displayComponent()}
    </nav>
    )
}

}

export default Nav;