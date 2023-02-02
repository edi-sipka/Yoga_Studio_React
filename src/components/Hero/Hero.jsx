/* eslint-disable */
import React from 'react'
import "./Hero.css"
import yoga_girl from "../../assets/yoga-girl.png"
import header_sec from "../../assets/header-sec.png"
import Heart from "../../assets/heart.png"
import Calories from "../../assets/calories.png"
import {motion} from "framer-motion"
import Header from '../Header/Header'

 const Hero = () => {
    const transition = {type: "spring", duration: 3}
    const mobile = window.innerWidth<=768? true:false;
  return (
    <div className='hero'>
    <div className='blur hero-blur'></div>
    <div className='left-h'>
    <Header/>
    <div className='the-best-ad'>
        <motion.div
        initial={{left: mobile? "178px":"268px"}}
        whileInView={{left:"8px"}}
        transition={{...transition, type:"tween"}}
        ></motion.div>
        <span>Lorem ipsum lorem ipsum lorem ipsum</span>
    </div>
    <div className='hero-text'>
        <div> 
        <span className='stroke-text'>Relax </span>
        <span>Your</span>
    </div>
    <div><span>Ideal Body</span></div>
    <div>
    <span>Lorem ipsum lorem ipsum lorem ipsum </span>
    </div>
    </div>

    <div className='figures'>
    <div><span>5</span><span> different studios</span></div>
    <div><span>100+</span><span>active members</span></div>
    <div><span>50+</span><span>programs</span></div>
</div>
<div className='hero-buttons'>
    <button className='btn'>Get Started</button>
    <button className='btn'>Learn More</button>
</div>
</div>
<div className='right-h'>
    <button className='btn'>Join Now</button>
    <motion.div
       initial={{right:"-1rem"}}
       whileInView={{right:"4rem"}}
       transition={transition}       
        className='heart-rate'>
        <img src={Heart} alt="logo heart" />
        <span>Heart Rate</span><span>116 bpm</span>
    </motion.div>

    <img src={yoga_girl} alt="" className='hero-image'/>
    <motion.img
       initial={{right:"11rem"}}
       whileInView={{right:"20rem"}}
       transition={transition}  
    src={header_sec} alt="" className='hero-image-back'/>

    <motion.div 
        initial={{right:"37rem"}}
       whileInView={{right:"28rem"}}
       transition={transition} 
       className='calories'>
        <img src={Calories} alt="logo calories photo"/>
        <div>
        <span>Calories Burned</span><span>220 kcal</span>
</div>
    </motion.div>

    </div>
    </div>
  )
}
export default Hero;