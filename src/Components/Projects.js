import React from 'react';
import './Projects.css'
import image from "../images/cabin.png"
import image1 from "../images/safe.png"
import image2 from "../images/game.png"
import Card from './Card.js'

const Projects = ({projGit}) =>{
  return (
    <div className="grid-wrapper  ">
      {
        projGit.map((user,i) => {
          return(
            <Card
            key={i} 
            name={projGit[i].name} 
            description={projGit[i].description}
            url= {projGit[i].html_url}
            url2 = {projGit[i].homepage}
            language={projGit[i].language}
            />
          )
        })

        }
      
    {/* 
     <div  className='box'><img src={image1} alt="data_Store" onClick={()=>this.getProject}></img> </div>
     <div  className='box '><img src={image2} alt="data_Store"></img> </div>
     <div  className='box '><img src={image1} alt="data_Store"></img> </div>
     <div  className='box '><img src={image2} alt="data_Store"></img> </div> */}

   </div>
  )
}
           
    

export default Projects;