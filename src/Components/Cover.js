import React from 'react';
import './Cover.css'
import image from '../images/undraw.png';

const Cover = () =>{
    return (
        <div className="cover">
      <img className="imageCover" src={image} alt="cover"></img> 
        </div>
    )
} 

export default Cover;