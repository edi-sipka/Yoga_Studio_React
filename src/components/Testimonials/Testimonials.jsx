/* eslint-disable */

import React, {useState} from 'react'
import {motion} from "framer-motion"
import "./Testimonials.css"
import {testimonialsData} from "../../data/testimonialsData"
import leftArrow from "../../assets/leftArrow.png"
import rightArrow from "../../assets/rightArrow.png"


 const Testimonials = () => {
    const [selected, setSelected] = useState(0);
    const tLength = testimonialsData.length;
    const transition = {type: "spring", duration: 3}
  return (
  <div className='Testimonals'>
    <div className='left-t'>
        <span>Testimonals</span>
        <span className='stroke-text'> What they</span>
        <span>say about us</span>
        <motion.span
        key={selected}
        initial={{opacity:0, x: -100}}
        animate={{opacity: 1, x: 0}}
        exit= {{opacity:0, x: 100}}
        transition={{transition}}
        >{testimonialsData[selected].review}
        </motion.span>
        <span style={{color: "var(--orange)"}}>
            {testimonialsData[selected].name}
        </span>
        <span>
           - {testimonialsData[selected].status}
        </span>
    </div>
    <div className='right-t'>
    <div></div>
    <div></div>
<motion.img 
     key={selected}
     initial={{opacity:0, x: 100}}
     animate={{opacity: 1, x:0}}
     exit= {{opacity:0, x: -100}}
     transition={{transition}}
src={testimonialsData[selected].image}/>
<div className='arrows'>
    <img 
    onClick={()=>{
        selected === 0 ? 
        setSelected(tLength - 1) : setSelected((prev)=> prev - 1)
    }}
    src={leftArrow} />
    <img 
    onClick={()=>{
        selected === tLength -1 ? 
        setSelected(0) : setSelected((prev)=> prev + 1)
    }}
    src={rightArrow} />
 </div>
 </div>
  </div>
  )
}

export default Testimonials;