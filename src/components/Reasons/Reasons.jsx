/* eslint-disable */
import React from 'react';
import "./Reasons.css";
import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";
import img4 from "../../assets/img4.jpg";
import sony from "../../assets/sony.png";
import voque from "../../assets/voque.png";
import apple from "../../assets/apple.png";
import tick from "../../assets/tick.png";

const Reasons = () => {
  return (
    <div className="Reasons" id="reasons">
        <div className="left-r">
            <img src={img1}/>
            <img src={img2}/>
            <img src={img3}/>
            <img src={img4}/>
        </div>
        <div className='right-r'>
            <span>Some reasons</span>
            <div>
            <span className='stroke-text'>why</span>
            <span> choose us?</span>
            </div>
        

<div className='details-r'>
<div>
<img src={tick} />
<span> Lorem ipsum</span>
</div>
<div>
<img src={tick} />
<span>Lorem ipsum</span>
</div>
<div>
<img src={tick} />
<span>
Lorem ipsum
</span></div>
<div>
<img src={tick} />
<span>
Lorem ipsum
</span>
</div>
</div>
</div>
</div>
  )
}

export default Reasons;