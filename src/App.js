import './App.css';
import Contact from './Components/Contact';
import Home from './Components/Home';
import About from './Components/About'
import Footer from './Components/Footer';
import Nav from './Components/Nav';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';




function App() {
  return (
    <Router>
    <div className="App">
      <Nav />
      <div className='wrapper'>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/about" element={<About/>}/>
          </Routes>
        <Footer />
      </div>
    </div>
    </Router>
  );
}

export default App;
