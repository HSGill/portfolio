import React from 'react';
import Cover from './Cover';
import Projects from './Projects';
//import logo from './logo.svg';
import './App.css';
import Nav from './Nav.js';

function App() {
  return (
    <div className="container">
      <Nav className='nav'></Nav>
       <Cover> </Cover>
        <Projects></Projects>
      
    </div>
  );
}

export default App;
