import React, {useState, useEffect} from 'react';
import { Routes, Route } from 'react-router-dom';
import About from './About';
import Home from './Home';
import './App.css';
import Navbar from './Navbar';
import Destinations from './Destinations';
import Works from './Works';
import Travel from './Travel';

function App() {
  const [dest,setDest] =useState([])
  const [likes, setLikes] = useState(0)

useEffect(()=>{
    fetch("http://localhost:3000/destinations")
        .then((res)=>res.json())
        .then((dest)=> setDest(dest))
},[])

function handleClickLike (e) {
  setLikes((prevLikes) => prevLikes + 1)
}
  return (
    <div className="App">
      <header className="App-header">
      <Navbar/>
        <Routes>
          <Route exact path="/about" element={<About/>}/>
          <Route exact path="/destinations" element={<Destinations dest={dest} onAddLike={handleClickLike}/>}/>
          <Route exact path="/travel" element={<Travel/>}/>
          <Route exact path="/works" element={<Works/>}/>
          <Route exact path="/" element={<Home/>}/>
        </Routes>
      </header>
    </div>
  );
}

export default App;
