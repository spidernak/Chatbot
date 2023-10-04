import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faArrowLeft} from '@fortawesome/free-solid-svg-icons'
import './Enroll.css'
import fb_logo from './Asset/fb.jpg'
import google from './Asset/gg.png'
import twitter from './Asset/x.png'
import { useState } from 'react'

function Enroll({backtohomepage}) {
    const [change, setChange] = useState("Sign Up");
  return (
    <div className='enrollpage'>
        <div className='leftside'>
          <button className='back_icon' onClick={() => backtohomepage(false)}>
            <FontAwesomeIcon icon={faArrowLeft}/>
          </button>
          <h1>Robot</h1>
          <h2>It gives you an easy way to solve problems</h2>

        </div>
        <div className='rightside'>
            <h1>{change}</h1>
            <div className='input-blog'>
            {change === "Sign Up"?<div></div>:<label>Welcome back 😊</label>}
                 
                {change === "Login"?<div></div>:
                    <input type='email' placeholder='Username' required>
                        </input>}
                <input type='email' placeholder='Email' required></input>
 
                <input type='password' placeholder='Password' required></input>
                {change === "Sign Up"?<div></div>:<a>Forget Password?</a>}
                <div className='submit'>
                <div  className={change === "Login"?"submit gray":"submit"} onClick={() => {setChange("Sign Up")}}>Sign Up</div>
                <div className={change ==="Sign Up"?"submit gray":"submit"} onClick={() => {setChange("Login")}}>Login</div>
                </div>
                {change === "Login"?<div></div>:<label1>or continue with</label1>}
                {change === "Login"?<div></div>:<div className='platform'>
                    <img src={google} alt=''/>
                    <img src={fb_logo} alt=''/>
                    <img src={twitter} alt=''/>
                    </div>}
            </div>
        </div>
    </div>
  )
}

export default Enroll