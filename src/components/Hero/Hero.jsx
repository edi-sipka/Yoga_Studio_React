/* eslint-disable */
import React from 'react'
import "./Hero.css"
import yoga_girl from "../../assets/yoga-girl.png"
import header_sec from "../../assets/header-sec.png"
import YogaIcon from "../../assets/yoga-icon-f.png"
import Clock from "../../assets/clock.png"
import {motion} from "framer-motion"
import Header from '../Header/Header'
import NumberCounter from "number-counter"

 const Hero = () => {
    const transition = {type: "spring", duration: 3}
    const mobile = window.innerWidth<=768? true:false;
  return (
    <div className='hero' id="home">
    <div className='blur hero-blur'></div>
    <div className='left-h'>
    <Header/>
    <div className='the-best-ad'>
        <motion.div
        initial={{left: mobile? "178px":"268px"}}
        whileInView={{left:"8px"}}
        transition={{...transition, type:"tween"}}
        ></motion.div>
        <span>Empowered Movement Studio & Holistic Suite</span>
    </div>
    <div className='hero-text'>
        <div> 
        <span className='stroke-text'>Relax </span>
        <span>Your</span>
    </div>
    <div><span>Body <span className='stroke-text'>and</span> Soul</span></div>
    <div>
    <span>We believe in tuning in to the creative guide within and leading <br/> through a heart-centered lens. We welcome all into our community <br/> to find joy and freedom within their body!</span>
    </div>
    </div>

    <div className='figures'>
    <div><span><NumberCounter end={3} start={1} delay="4" /></span><span> different studios</span></div>
    <div><span><NumberCounter end={140} start={100} delay="4" preFix="+"/></span><span>active members</span></div>
    <div><span><NumberCounter end={20} start={9} delay="4" preFix="+"/></span><span>programs</span></div>
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
        <img src={YogaIcon} alt="logo yoga" />
        <span>Yoga/Pilates</span><span>Every day</span>
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
        <img src={Clock} alt="clock icon"/>
        <div>
        <span>Meditation sessions</span><span>20 min</span>
</div>
    </motion.div>

    </div>
    </div>
  )
}
export default Hero;