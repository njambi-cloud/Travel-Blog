import { Routes, Route } from 'react-router-dom';
import About from './About';
import Home from './Home';
import './App.css';
import Navbar from './Navbar';
import Destinations from './Destinations';
import Works from './Works';
import Travel from './Travel';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Navbar/>
        <Routes>
          <Route exact path="/about" element={<About/>}/>
          <Route exact path="/destinations" element={<Destinations/>}/>
          <Route exact path="/travel" element={<Travel/>}/>
          <Route exact path="/works" element={<Works/>}/>
          <Route exact path="/" element={<Home/>}/>
        </Routes>
      </header>
    </div>
  );
}

export default App;
