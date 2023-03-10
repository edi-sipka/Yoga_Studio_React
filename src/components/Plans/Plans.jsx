/* eslint-disable */

import React from 'react';
import "./Plans.css";
import {plansData} from "../../data/plansData";
import whiteTick from "../../assets/whiteTick.png";

 const Plans = () => {
  return (
   <div className='plans-container'>
    <div className='blur plans-blur-1'></div>
    <div className='blur plans-blur-2'></div>
    <div className='programs-header'>
        <span className='stroke-text'>Check </span>
        <span> Our</span>
        <span className='stroke-text'> Class Plans</span>
    </div>

    <div className='plans'>
     {plansData.map((plan,i)=>(
        <div className='plan' key={i}>
            {plan.icon}
            <span>{plan.name}</span>
            <span>$ {plan.price}</span>
        <div className='features'>
            {plan.features.map((feature,i)=>(
        <div className='feature'>
            <img src={whiteTick} />
            <span key={i}>{feature}</span>
            </div>
        ))}
        </div>
        <div>
        <span>See more benefits -> </span>
        </div>
        <button className='btn'>Join us now</button>
        </div>
        ))}
    </div>
   </div>
  )
}

export default Plans;