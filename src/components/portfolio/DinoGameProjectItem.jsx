
// import React, { useState } from 'react';
// import DinoGameModal from './DinoGameModal';
// import { motion } from 'framer-motion';

// const DinoGameProjectItem = ({ project }) => {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const itemVariants = {
//     hidden: { opacity: 0, scale: 0.9 },
//     visible: { opacity: 1, scale: 1 },
//   };

//   const hoverVariants = {
//     hover: { y: -10, boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)" },
//   };

//   return (
//     <>
//       <motion.div
//             key={project.id}
//             className="portfolio__item"
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: false }}
//             whileHover="hover"
//             variants={{ ...itemVariants, ...hoverVariants }}
//           >
//         <div className="portfolio__item-image">
//           <img src={project.image} alt={project.title} />
//         </div>
//         <h3>{project.title}</h3>
//         <p>{project.category}</p>
//         <div className="portfolio__item-cta">
//           <button className="btn btn-primary" onClick={() => setIsModalOpen(true)}>
//             Play
//           </button>
//         </div>
//       </motion.div>

//       {isModalOpen && (
//         <DinoGameModal onClose={() => setIsModalOpen(false)} />
//       )}
//     </>
//   );
// };

// export default DinoGameProjectItem;

import React, { useState } from 'react';
import DinoGameModal from './DinoGameModal';
import { motion } from 'framer-motion';

const DinoGameProjectItem = ({ project }) => {
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

  const dinoIconVariants = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const playButtonVariants = {
    animate: {
      scale: [1, 1.1, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <>
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
          <motion.div 
            className="dino-icon"
            variants={dinoIconVariants}
            animate="animate"
          >
            🦖
          </motion.div>
        </div>
        <h3>{project.title}</h3>
        <p>{project.category}</p>
        <div className="portfolio__item-cta">
          <motion.button 
            className="btn btn-primary"
            onClick={() => setIsModalOpen(true)}
            variants={playButtonVariants}
            animate="animate"
          >
            Play
          </motion.button>
        </div>
      </motion.div>

      {isModalOpen && (
        <DinoGameModal onClose={() => setIsModalOpen(false)} />
      )}
    </>
  );
};

export default DinoGameProjectItem;