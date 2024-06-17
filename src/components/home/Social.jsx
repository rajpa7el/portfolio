import { motion } from 'framer-motion';

// Animation Variants
const containerVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, 
      duration: 2
    },
  },
};

const itemVariants = {
  initial: { x: -25, opacity: 0 },
  animate: { x: 0, opacity: 1 },
};

const Social = () => {
  return (
    <motion.div
      className="home__social"
      variants={containerVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: false }}
    >
      <motion.a
        href="https://www.linkedin.com/in/rajpa7el/"
        className="home__social-icon"
        target="_blank"
        variants={itemVariants}
      >
        <i className="uil uil-linkedin-alt"></i>
      </motion.a>

      <motion.a
        href="https://github.com/rajpa7el"
        className="home__social-icon"
        target="_blank"
        variants={itemVariants}
      >
        <i className="uil uil-github-alt"></i>
      </motion.a>

      <motion.a
        href="https://www.instagram.com/rajpa7el"
        className="home__social-icon"
        target="_blank"
        variants={itemVariants}
      >
        <i className="uil uil-instagram"></i>
      </motion.a>
    </motion.div>
  );
};

export default Social;

