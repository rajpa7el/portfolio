// Data.js
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const typewriterWords = ["Developer", "Creator", "Thinker"];

const Data = () => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (subIndex === typewriterWords[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), 500);
    } else if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prevIndex) => (prevIndex + 1) % typewriterWords.length);
    }

    const timeout = setTimeout(() => {
      setSubIndex((prevSubIndex) => prevSubIndex + (reverse ? -1 : 1));
    }, reverse ? 75 : subIndex === typewriterWords[index].length ? 100 : 150);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

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
      <h3 className="home__subtitle">{`${typewriterWords[index].substring(0, subIndex)}`}<span className="typewriter-cursor"></span></h3>
      <p className="home__description">
        I'm a fourth year Computer Science student who loves to code Web Apps, Games and more.
      </p>
      <motion.div variants={buttonVariants} 
      initial="hidden" 
      whileInView="visible"
      viewport={{ once: false }} 
      whileHover="hover">
        <a href="/contact" className="button button-flex"> {"< Say Hello />"} </a>
      </motion.div>
    </motion.div>
  );
};

export default Data;
