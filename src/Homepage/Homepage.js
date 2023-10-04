import React from 'react'
import './Homepage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHippo, faSearch, faImage, faRobot} from '@fortawesome/free-solid-svg-icons'
import {faFacebook , faTwitter , faInstagram, faLinkedin} from '@fortawesome/free-brands-svg-icons'

function Homepage() {
  return (
    <div className='Home'>
       <div className='homepage'>
       <div className='leftside'>
        <a>Best Chat AI</a>
        <img src='{Image}' alt=''></img>
       </div>
      <div className='rightside'>
        <div className='free'>
          
        </div>
        <div className='pay'>
        
        </div>
      </div>
       </div>
      <div className='more'>
          <div className='box'>
            <FontAwesomeIcon icon={faSearch} className='icon'/>
            <h1>Search</h1>
            <h2></h2>
          </div>
          <div className='box'>
            <FontAwesomeIcon icon={faImage} className='icon'/>
            <h1>Image</h1>
          </div>
          <div className='box'>
            <FontAwesomeIcon icon={faRobot} className='icon'/>
            <h1>Chat</h1>
          </div>
        </div>
        
      <div className='buttom'>
        <div className='Describtion'>
          <h1>CHATBOT AI</h1>
          <h2>We can provide dedicated instances, unique pricing, model fine-tuning or solution customization for your business.</h2>
         </div>
        <div className='Contact'>
          <h1>CONTACT</h1>
          <div className='icon'>
          <FontAwesomeIcon icon={faTwitter} />
          <FontAwesomeIcon icon={faFacebook} />
          <FontAwesomeIcon icon={faInstagram}/>
          <FontAwesomeIcon icon={faLinkedin}/>
          </div>
        </div>
      </div>
        
    </div>
  
  )
}

export default Homepage