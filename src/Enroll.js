import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faA, faArrowLeft} from '@fortawesome/free-solid-svg-icons'
import './Enroll.css'
function Enroll({backtohomepage}) {
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
            <h1>Login</h1>
            <div className='input-blog'>
                <input type='email' placeholder='Email' required></input>
                <input type='password' placeholder='Password' required></input>
                <a>Forget Password?</a>
                <button type='submit' className='submit'>Login</button>
                <a>or continue with</a>
                <div className='platform'>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Enroll