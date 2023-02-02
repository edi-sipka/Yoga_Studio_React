/* eslint-disable */

import React from 'react'
import "./Footer.css"
import Github from "../../assets/github.png"
import Instagram from "../../assets/instagram.png"
import Linkedin from "../../assets/linkedin.png"
import Logo from "../../assets/yoga-studio.png"

const Footer = () => {
  return (
    <div className='Footer-container'>
        <hr />
        <div className='footer'>
        <div className='social-links'>
            <img src={Github} />
            <img src={Instagram} />
            <img src={Linkedin} />
        </div>
        <div className='logo-f'>
        <img src={Logo} className="logo" />  
        </div>
        </div>
        <div className='blur-f'></div>
        </div>
  )
}

export default Footer;