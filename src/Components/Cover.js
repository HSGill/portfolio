import React from 'react';
import './Cover.css'
import image from '../images/undraw.png';

const Cover = () =>{
    return (
        <div className="cover">
      <div> <img className="imageCover" src={image} alt="cover"></img> </div>
        </div>
    )
} 

export default Cover;