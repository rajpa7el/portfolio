import React, { useState } from 'react';
import { motion } from 'framer-motion';
import DinoGameModal from './DinoGameModal';

const PortfolioItem = ({ project }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  };

  const hoverVariants = {
    hover: { 
      y: -10, 
      boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
      transition: { duration: 0.3 }
    },
  };

  const buttonVariants = {
    rest: { scale: 1 },
    hover: { scale: 1.1 },
    pressed: { scale: 0.95 }
  };

  return (
    <motion.div
      className="portfolio__item"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}
      whileHover="hover"
      variants={{ ...itemVariants, ...hoverVariants }}
    >
      <div className="portfolio__item-image">
        <img src={project.image} alt={project.title} />
        {project.title === "Dino Runner Game" && (
          <motion.div 
            className="dino-icon"
            animate={{
              y: [0, -10, 0],
              transition: { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
            }}
          >
            🦖
          </motion.div>
        )}
      </div>
      <h3>{project.title}</h3>
      <p>{project.category}</p>
      <div className="portfolio__item-cta">
        {project.title === "Dino Runner Game" ? (
          <motion.button 
            className="btn btn-primary"
            onClick={() => setIsModalOpen(true)}
            variants={buttonVariants}
            initial="rest"
            whileHover="hover"
            whileTap="pressed"
          >
            Play Game
          </motion.button>
        ) : (
          <motion.a 
            href={project.link} 
            className="btn" 
            target="_blank" 
            rel="noopener noreferrer"
            variants={buttonVariants}
            initial="rest"
            whileHover="hover"
            whileTap="pressed"
          >
            View Project
          </motion.a>
        )}
      </div>
      
      {isModalOpen && (
        <DinoGameModal onClose={() => setIsModalOpen(false)} />
      )}
    </motion.div>
  );
};

export default PortfolioItem;