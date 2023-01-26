/* eslint-disable */

import React from 'react'
import "./Hero.css"

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
</div>
<div className='right-h'></div>

    </div>
  )
}
export default Hero;