/* eslint-disable */

import React from 'react'
import "./Header.css"
import Logo from "../../assets/yoga-studio.png"
import Bars from "../../assets/bars.png"
import { Link } from 'react-scroll'

const Header = () => {
  const mobile = window.innerWidth <= 768 ? true : false;
  return (
    <div className='header'>
        <img src={Logo} alt="logo" style={{width:"3.5rem", height:"3.5rem"}}/>
          {mobile === true ? (
            <div>
            <img src={Bars} style={{width:"1.5rem", height:"1.5rem"}}  />
            </div>
          ): (
            <ul className='header-menu'>
            <li><Link to="home" span={true} smooth={true}>Home</Link></li>
            <li><Link to="programs" span={true} smooth={true}>Programs</Link></li>
            <li><Link to="Reasons" span={true} smooth={true}>Why us</Link></li>
            <li><Link to="plans" span={true} smooth={true}>Plans</Link></li>
            <li><Link to="Testimonals" span={true} smooth={true}>Testimonials</Link></li>
        </ul>
          )} 
    </div>
  )
}
export default Header;