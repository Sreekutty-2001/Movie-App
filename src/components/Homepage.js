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
      <button className='home-btn' > <Link id='home-link' to="/search">Move on</Link> </button>

    </div>
  )
}

export default Homepage