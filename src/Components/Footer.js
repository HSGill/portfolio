import React from 'react';
class Footer extends React.Component{
    constructor(props){
        super(props);
        this.state={
            header:''
        };
    }
    async onclick () {
     let resp =  await  fetch('http://localhost:3001')
        let response = await resp.json()
console.log(response)    }
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