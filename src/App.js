import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Contact from './components/contact/Contact'
import ParticlesBackground from './components/particles/ParticlesBackground';
import Portfolio from './components/portfolio/Portfolio';


function App() {
  return (
    <Router>
      <ParticlesBackground />
      <div className="App">
        <Header />

        <main className="main">
          <RoutesWithReanimation />
        </main>
      </div>
    </Router>
  );
}

function RoutesWithReanimation() {
  const location = useLocation(); 

  return (
      <Routes location={location} key={location.pathname}> 
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
  );
}

export default App;


