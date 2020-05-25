import React from 'react';
import './Projects.css'
import image from "../images/cabin.png"
import image1 from "../images/safe.png"
import image2 from "../images/game.png"

class Projects extends React.Component{
    constructor(){
        super();
        this.state={
          
        };
    }
   
    async getProject (){
        let response= await fetch('http://localhost:3001');
        let data = await response.json();
        console.log(data);
    }

    async getProjectsGithub (){
        let response = await fetch('https://api.github.com/user/repos',{
            method: "GET",
            headers:{
                'Authorization' : 'bearer' + ''
            }
        })
    }
    render(){
        return (
            <div className="grid-wrapper  ">
          {/*}  <div className="box ">
            <img  src={image} alt="data_Store" onClick={this.popUp.bind(this)}></img>
            {this.state.showpopup?<PopUp closePopup={this.popUp.bind(this)}></PopUp>: null}
            </div> 
             <div  className='box'><img src={image1} alt="data_Store"></img> </div>
             <div className='box'><img src={image2} alt="data_Store"></img> </div>
             <div  className='box '><img src={image1} alt="data_Store"></img> </div>
             <div className='box ' ><img src={image} alt="data_Store"></img> </div> */}

             <div  className='box'><img src={image1} alt="data_Store" onClick={this.getProject}></img> </div>
             <div  className='box '><img src={image2} alt="data_Store"></img> </div>
             <div  className='box '><img src={image1} alt="data_Store"></img> </div>
             <div  className='box '><img src={image2} alt="data_Store"></img> </div>

           </div>
           
        )
    }
} 

export default Projects;