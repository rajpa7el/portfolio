// src/components/preloader/Preloader.js
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Preloader.css';

const greetings = [
    "Hello",      // English
    "Bonjour",    // French
    "Hola",       // Spanish
    "Hallo",      // German
    "Ciao",       // Italian
    "こんにちは", // Japanese
    "안녕하세요", // Korean
    "你好",       // Chinese
    "Olá",        // Portuguese
    "Здравствуйте", // Russian
  ];

const Preloader = ({ setLoading }) => {
  const [currentGreeting, setCurrentGreeting] = useState(0);

  useEffect(() => {
    const greetingInterval = setInterval(() => {
      setCurrentGreeting((prev) => (prev + 1) % greetings.length);
    }, calculateIntervalDuration(greetings[currentGreeting]));

    return () => {
      clearInterval(greetingInterval);
    };
  }, [currentGreeting]);

  const handleScreenClick = () => {
    setLoading(false);
  };

  return (
    <div className="preloader" onClick={handleScreenClick}>
      <AnimatePresence>
        <TypingEffect key={currentGreeting} text={greetings[currentGreeting]} />
      </AnimatePresence>
      <div className="click-to-continue">Click anywhere to continue</div>
    </div>
  );
};

const TypingEffect = ({ text }) => {
  const letters = text.split('');
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.1,
        when: "beforeChildren",
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 1,
        when: "afterChildren",
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div
      className="typing-effect"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      style={{ position: 'absolute' }} // Ensures the container stays in place
    >
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          variants={letterVariants}
          style={{ display: 'inline-block' }}
        >
          {letter}
        </motion.span>
      ))}
    </motion.div>
  );
};

const calculateIntervalDuration = (greeting) => {
  const letterCount = greeting.length;
  const animationDuration = letterCount * 0.6; // 0.5 seconds per letter + stagger duration
  const delayDuration = 1; // 1 second delay before the next word
  return (animationDuration + delayDuration) * 1000; // Convert to milliseconds
};

export default Preloader;
