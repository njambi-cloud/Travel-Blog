import { Routes, Route } from 'react-router-dom';
import About from './About';
import './App.css';
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Navbar/>
        <Routes>
          <Route exact path="/about" element={<About/>}/>
        </Routes>
        
        
      Teddy
      </header>
    </div>
  );
}

export default App;
