import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './header.css';

const Header = () => {
  const [isMenuOpen, toggleMenu] = useState(false);

  const handleToggle = () => toggleMenu(!isMenuOpen);

  return (
    <header className='header'>
      <nav className="nav">
        <a href="#home" className="nav__logo">Raj Patel</a>
        
        <div className={isMenuOpen ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            {['home', 'about', 'portfolio', 'contact'].map((section, index) => (
              <li key={index} className="nav__item">
                <a href={`#${section}`} className="nav__link" onClick={handleToggle}>
                  <i className={`uil ${['uil-estate', 'uil-user', 'uil-code-branch', 'uil-message'][index]} nav__icon`}></i> {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              </li>
            ))}
          </ul>
          <motion.i animate={{ rotate: isMenuOpen ? 180 : 0, opacity: isMenuOpen ? 1 : 0 }}
            transition={{ duration: 0.4 }}
            className="uil uil-times nav__close" onClick={handleToggle}></motion.i>
        </div>

        <motion.div animate={{ rotate: isMenuOpen ? 180 : 0, opacity: isMenuOpen ? 0 : 1 }}
          transition={{ duration: 0.2 }}
          className="nav__toggle" onClick={handleToggle}>
          <i className="uil uil-apps"></i>
        </motion.div>
      </nav>
    </header>
  );
}

export default Header;

