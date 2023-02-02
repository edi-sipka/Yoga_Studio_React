/* eslint-disable */

import React, {useRef} from 'react'
import "./Join.css"
import emailjs from "@emailjs/browser"


 const Join = () => {
    const form = useRef()
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_w8b5glm', 'template_b0cixp6', form.current, 'BIETRZ_B8sPFCptaZ')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };
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
            <form ref={form} className='email-container' onSubmit={sendEmail}>
                <input type="email" name="user_email"
                placeholder='Enter your Email and signup'></input>
                <button className='btn btn-j'>Join us</button>
            </form>
        </div>
    </div>
  )
}

export default Join;