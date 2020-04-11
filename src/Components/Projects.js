import React from 'react';
import './Projects.css'
import image from "../images/data_storage_2_2.png"
import image1 from "../images/desktop_analytics_2.png"
import image2 from "../images/monitor_coding_2.png"
const Projects = () =>{
    return (
        <div className="project ">
        <div className="grid-wrapper ">
         <div className='box box-a' ><img src={image} alt="data_Store"></img> </div>
         <div  className='box box-b'><img src={image1} alt="data_Store"></img> </div>
         <div className='box box-c'><img src={image2} alt="data_Store"></img> </div>
         <div  className='box box-b'><img src={image1} alt="data_Store"></img> </div>
         <div className='box box-a' ><img src={image} alt="data_Store"></img> </div>
         <div  className='box box-b'><img src={image1} alt="data_Store"></img> </div>
       </div>
       </div>
       
    )
} 

export default Projects;