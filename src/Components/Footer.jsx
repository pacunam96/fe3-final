import React from 'react'
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <div>    
      <button className='Return'>
        <Link className="linkHome" to="/home" >Return to main page⬅️</Link>
      </button>
      
      <footer>
        <img className="logoDH" src="/images/DH.png" alt="logo DH"/>
        <img src="/images/ico-facebook.png" alt="FB"/>
        <img src="/images/ico-instagram.png" alt="IN"/>
        <img src="/images/ico-tiktok.png" alt="TIK"/>
        <img src="/images/ico-whatsapp.png" alt="WA"/>
      </footer >
    </div>
  )
}

export default Footer
