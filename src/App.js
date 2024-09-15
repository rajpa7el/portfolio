import React, { useState } from 'react';
import "./App.css";
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
import ParticlesBackground from './components/particles/ParticlesBackground';
import HamsterLoader from './components/preloader/HamsterLoader';

const App = () => {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <><HamsterLoader setLoading={setLoading} /></>}
      {!loading && (
        <>
          <Header />
          <ParticlesBackground />
          <main className='main'>
            <Home />
            <About />
            <Portfolio />
            <Contact />
          </main>
        </>
      )}
    </>
  );
}

export default App;

