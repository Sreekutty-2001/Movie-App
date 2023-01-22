import React from 'react'
import { Link } from 'react-router-dom'
import './Homepage.css'
import logo from "../assets/transformers.jpg"
function Homepage() {
  return (
    <div>
      <div className="image">
        <img className='img' src={logo}alt="loading"/>
        
      </div>
      <div className="btn-div">
      <div className='home-btn' > 
      <Link id='home-link' to="/search">Move on</Link>
       </div>

      </div>
     
    </div>
  )
}

export default Homepage