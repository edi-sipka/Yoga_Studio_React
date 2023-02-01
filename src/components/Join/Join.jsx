/* eslint-disable */

import React from 'react'
import "./Join.css "


 const Join = () => {
  return (
    <div className='Join' id="join-us">
        <div className='left-j'>
        <hr />
        <div>
            <span className='stroke-text'>Ready to</span>
            <span>Relax</span>
        </div>
        <div>
            <span className='stroke-text'>Your body</span>
            <span>With us</span>
        </div>
        </div>
        <div className='right-j'>
            <form action="" className='email-container'>
                <input type="email" name="user_email"
                placeholder='Enter your Email and signup'></input>
                <button className='btn btn-j'>Join us now</button>
            </form>
        </div>
    </div>
  )
}

export default Join;