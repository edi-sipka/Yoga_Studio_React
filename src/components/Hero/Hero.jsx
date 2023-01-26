/* eslint-disable */
import React from 'react'
import "./Hero.css"
import yoga_girl from "../../assets/yoga-girl.png"
import header_sec from "../../assets/header-sec.png"
import Heart from "../../assets/heart.png"
import Calories from "../../assets/calories.png"

import Header from '../Header/Header'

 const Hero = () => {
  return (
    <div className='hero'>
<div className='left-h'>
    <Header/>
    <div className='the-best-ad'>
        <div></div>
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
    <div className='heart-rate'>
        <img src={Heart} alt="logo heart" />
        <span>Heart Rate</span><span>116 bpm</span>
    </div>

    <img src={yoga_girl} alt="" className='hero-image'/>
    <img src={header_sec} alt="" className='hero-image-back'/>

    <div className='calories'>
        <img src={Calories} alt="logo calories photo"/>
        <div>
        <span>Calories Burned</span><span>220 kcal</span>
</div>
    </div>

    </div>
    </div>
  )
}
export default Hero;