import './App.css';
import React from "react"
import Search from "./components/Search/Search"  
import { Routes,Route } from 'react-router-dom';
import Homepage from './components/Homepage';


function App() {
 
  return (
    
    <div className="App">
      
      <main>
        <Routes>
            <Route index element ={<Homepage/>}/>
            <Route path="/search" element ={<Search />}/>
      
        </Routes>
      
      {/* {typeof state.selected.Title!="undefined"?(
        <Detail selected={state.selected}/>
      ):(
        false
      )} */}
      </main>
     
      <div>
        
      </div>
      </div> 
  );
}

export default App;
