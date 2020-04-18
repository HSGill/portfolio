import React from 'react';
import './Projects.css'
import image from "../images/cabin.png"
import image1 from "../images/safe.png"
import image2 from "../images/game.png"

const Projects = () =>{
    return (
        <div className="grid-wrapper  ">
        <div className="box "><img  src={image} alt="data_Store"></img> </div> 
         <div  className='box box-b'><img src={image1} alt="data_Store"></img> </div>
         <div className='box box-c'><img src={image2} alt="data_Store"></img> </div>
         <div  className='box box-b'><img src={image1} alt="data_Store"></img> </div>
         <div className='box box-a' ><img src={image} alt="data_Store"></img> </div>
         <div  className='box box-b'><img src={image1} alt="data_Store"></img> </div>
       </div>
       
    )
} 

export default Projects;