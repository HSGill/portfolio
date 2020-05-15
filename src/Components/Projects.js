import React from 'react';
import './Projects.css'
import image from "../images/cabin.png"
import image1 from "../images/safe.png"
import image2 from "../images/game.png"
import PopUp from './PopUp.js';

class Projects extends React.Component{
    constructor(){
        super();
        this.state={
          showpopup:false
        };
    }
    popUp (){
        this.setState({showpopup:!this.state.showpopup});
    }

    async getProject (){
        let response= await fetch('')
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

             <div  className='box'><img src={image1} alt="data_Store"></img> </div>
             
           </div>
           
        )
    }
} 

export default Projects;