import { motion } from "framer-motion";

const Info = () => {
  const boxVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.div
      className="about__info grid"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}
    >
      <motion.div
        className="about__box"
        variants={boxVariants}
        transition={{
          type: 'spring',
          stiffness: 100,
          damping: 10,
        }}
      >
        <i className="bx bx-award about__icon"></i>
        <h3 className="about__title">Education</h3>
        <span className="about__subtitle">Memorial University of Newfoundland</span>
      </motion.div>

      <motion.div
        className="about__box"
        variants={boxVariants}
        transition={{
          type: 'spring',
          stiffness: 100,
          damping: 10,
          delay: 0.2, // Add a delay for a staggered effect
        }}
      >
        <i className="bx bx-briefcase-alt about__icon"></i>
        <h3 className="about__title">Completed</h3>
        <span className="about__subtitle">10 + Projects</span>
      </motion.div>
    </motion.div>
  );
};

export default Info;
