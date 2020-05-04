import React from 'react';




class Footer extends React.Component{
    constructor(props){
        super(props);
        this.state={
            header:'Hello'
        };
    }
    onclick = () => {
       fetch('http://localhost:3001')
        .then(response =>response.json())
         .then(data => this.setState({header:data}));
    }
    render(){

        return (
            <div className="grid-wrapper  ">
            <button onClick={this.onclick}>Fetch Data</button>
            <div><h2>{this.state.header}</h2></div>
           </div>
           
        )
    }
} 

export default Footer;