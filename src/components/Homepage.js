import React from 'react'
import { Link } from 'react-router-dom'
import './Homepage.css'
function Homepage() {
  return (
    <div>
      <div className="image">
        
      </div>
      <button className='home-btn' > <Link id='home-link' to="/search">Move on</Link> </button>

    </div>
  )
}

export default Homepage