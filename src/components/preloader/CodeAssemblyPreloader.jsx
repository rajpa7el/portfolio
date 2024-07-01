import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Preloader.css';

const codeSymbols = ['<', '>', '/', '{', '}', '(', ')', ';', '=', '+', '-', '*', '&', '|', '[', ']'];
const keywords = ['function', 'const', 'let', 'if', 'else', 'return', 'async', 'await', 'import', 'export'];

const CodeAssemblyPreloader = ({ setLoading }) => {
  const [assembled, setAssembled] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAssembled(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleComplete = () => {
    setTimeout(() => setLoading(false), 1000);
  };

  return (
    <div className="preloader">
      <svg width="300" height="200" viewBox="0 0 300 200">
        <AnimatePresence>
          {!assembled && (
            <>
              {[...Array(50)].map((_, i) => (
                <motion.text
                  key={i}
                  x={Math.random() * 300}
                  y={Math.random() * 200}
                  fill="var(--title-color)"
                  fontSize="12"
                  fontFamily="monospace"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, scale: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.02 }}
                >
                  {codeSymbols[Math.floor(Math.random() * codeSymbols.length)]}
                </motion.text>
              ))}
            </>
          )}
        </AnimatePresence>
        
        <AnimatePresence>
          {assembled && (
            <>
              <motion.rect
                x="10" y="10" width="280" height="180" rx="10"
                fill="none" stroke="var(--title-color)" strokeWidth="2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, ease: "easeInOut" }}
              />
              {keywords.map((word, i) => (
                <motion.text
                  key={word}
                  x="20"
                  y={30 + i * 18}
                  fill="var(--title-color)"
                  fontSize="14"
                  fontFamily="monospace"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  {word}
                </motion.text>
              ))}
            </>
          )}
        </AnimatePresence>
      </svg>
      
      {assembled && (
        <motion.div
          className="click-to-continue"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          onAnimationComplete={handleComplete}
        >
          Click to enter
        </motion.div>
      )}
    </div>
  );
};

export default CodeAssemblyPreloader;