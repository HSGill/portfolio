import React from 'react';  
import './style.css';  

class PopUp extends React.Component {  
  render() {  
return (  
<div className='popup'>  
<h1 onClick={this.props.closePopup}>Project1</h1>
</div>  
);  
}  
}  

export default PopUp;