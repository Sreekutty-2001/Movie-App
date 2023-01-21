import './App.css';
import axios from "axios"
import React,{ useState } from "react"
import Home from './components/Home';
import Search from "./components/Search/Search"
import Results from './components/Results';  
import Herosection from './components/Herosection';

function App() {
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
    <div className="App">
      
      
      <main>
      <Herosection/>
      
        
        <Home/>
      <Search searchInput={searchInput} search={search}/>
      <Results results={state.results} />
      {/* {typeof state.selected.Title!="undefined"?(
        <Detail selected={state.selected}/>
      ):(
        false
      )} */}
      </main>
      
      
      </div> 
  );
}

export default App;
