import React, { useState } from 'react'
import axios from 'axios'
import Results from '../Results'

import './Search.css'
function Search() {
  const [state, setState] = useState({
    s: "",
    results: [],
    selected: {},
  })
  const [loading, setLoading] =useState(false)
  const apiurl = "https://www.omdbapi.com/?apikey=30ebd087";
  const searchInput = (e) => {
    let s = e.target.value;
    setState((prevState) => {
      return { ...prevState, s: s };
    })
  }
  const search = (e) => {
   axios.post(apiurl + "&s=" + state.s).then(({ data }) => {
      let results = data.Search;
      console.log(results);
      if(results){
        setLoading(false)
        setState((prevState)=>{
          return{...prevState,results:results}
        })
      }else{
        console.log("no result");
            setLoading(true)
      }
      
    })
  }
  return (
    <div className="Search">
    
      
        <input className='search-input'  type ="text" onChange={searchInput}/>
           
            <button className="search-btn"onClick={search}>Search</button>
            
            {/* <button>
<Link to='/'>
Get Started
</Link>
      </button> */}
      <Results loading={loading} results={state.results} />
    </div>
  )
}

export default Search