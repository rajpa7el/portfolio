// Data.js
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const words = ["Developer", "Creator", "Thinker"];

const Data = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000); // Change word every 2 seconds
    return () => clearTimeout(timeout);
  }, [currentWordIndex]);

  const buttonVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
    hover: { scale: 1.1, transition: { duration: 0.25 } },
  };

  return (
    <motion.div 
    initial={{ opacity: 0, y: 100 }} 
    whileInView={{ opacity: 1, y: 0 }} 
    viewport={{ once: false }}
    transition={{ duration: 1 }} className="home__data">
      <h1 className="home__title">Raj Patel</h1>
      <h3 className="home__subtitle">
        <AnimatePresence mode='wait'>
          <motion.span
            key={words[currentWordIndex]}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            {words[currentWordIndex]}
          </motion.span>
        </AnimatePresence>
      </h3>
      <p className="home__description">
        I'm a fourth year Computer Science student who loves to code Web Apps, Games and more.
      </p>
      <motion.div variants={buttonVariants} 
      initial="hidden" 
      whileInView="visible"
      viewport={{ once: false }} 
      whileHover="hover">
        <a href="#contact" className="button button-flex"> {"< Say Hello />"} </a>
      </motion.div>
    </motion.div>
  );
};

export default Data;
