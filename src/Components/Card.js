import React, { Component } from 'react'
import './Projects.css'


const Card = ({ name, description, url, url2, language }) => {

        return (
                <div className="box">
                        {/* <a href={url2} target='_blank'><img src="https://img.icons8.com/color/48/000000/youtube-live.png" /></a> */}
                        <div className="inside">
                                <div className="inside2">

                                        <h3 >{name}</h3>
                                        <div className="para">
                                                <p id="desc">{description}</p>
                                                <a href={url} target='_blank'><img src="https://img.icons8.com/clouds/100/000000/external-link.png" /></a>
                                        </div>
                                        <p id='lang'>{language}</p>

                                        <div className="foot">
                                                <a href={url2} target='_blank'>LIVE DEMO</a>
                                        </div>
                                </div>
                        </div>

                </div>
        )
}

export default Card
