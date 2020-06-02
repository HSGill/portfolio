import React, { Component } from 'react'
import './Projects.css'


const Card= ({name,description,url,url2,language}) =>{
 
return(
<div className="box">
<a   href={url2} target='_blank'><img src="https://img.icons8.com/color/48/000000/youtube-live.png"/></a>

        <h3 className="cap">{name}</h3>

<p id="desc">{description}</p>
<a  href={url} target='_blank'><img src="https://img.icons8.com/clouds/100/000000/external-link.png" /></a>
    
<p id='lang'>{language}</p>

</div>
)}

export default Card
