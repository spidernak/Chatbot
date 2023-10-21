import React from 'react'
import'./Navigationbar.css'
import{useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch} from '@fortawesome/free-solid-svg-icons'
import Enroll from '../Enroll'



function Navbar() {
  const [OpenEnrollPage, setOpenEnrollPage]= useState(false);
  return (
    
    <div className='Navigation_bar'>
      <div className='logo'>
        Chatbot AI
      </div>
        <span>Home</span>
        <span>About</span>
      <div className='Seacrchbar'>
        <input className='Input' type='email ' placeholder='Search'>
        </input>
        <FontAwesomeIcon icon={faSearch} className='searchicon'/>

      </div>
      <div className='Loging-signup'>
        <button className='btn'onClick={() => {setOpenEnrollPage(true);}}>Sign Up</button>
        <button className='btn'onClick={() => {setOpenEnrollPage(true);}}>Login</button>
        
      </div>
       
      {OpenEnrollPage && <Enroll backtohomepage={setOpenEnrollPage}/>}

    </div>
  
  )
}

export default Navbar