import React from 'react'
import './Search.css'
function Search({searchInput,search}) {
  return (
    <div className="Search">
         <input className='search-input' type ="text" onChange={searchInput}  />
           
            <button className="search-btn"onClick={search}>Search</button>
            
        
    </div>
  )
}

export default Search