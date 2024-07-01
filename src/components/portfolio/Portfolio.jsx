import React from "react";
import { motion } from "framer-motion";
import { projectsData } from "./Data";
import "./portfolio.css";
import DinoGameProjectItem from "./DinoGameProjectItem";

const Portfolio = () => {
  const headerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  };

  const hoverVariants = {
    hover: { y: -10, boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)" },
  };

  return (
    <section className="portfolio section" id="portfolio">
      <motion.h2
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        variants={headerVariants}
        transition={{ duration: 1 }}
        className="section__title"
      >
        Portfolio
      </motion.h2>

      <motion.span
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        variants={headerVariants}
        transition={{ duration: 1 }}
        className="section__subtitle"
      >
        Most recent work
      </motion.span>

      <div className="portfolio__container container">
        {projectsData.map((project) => ( project.title === "Dino Runner Game" ? (
          <DinoGameProjectItem key={project.id} project={project} />) : 
          (
          <motion.div
            key={project.id}
            className="portfolio__item"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            whileHover="hover"
            variants={{ ...itemVariants, ...hoverVariants }}
          >
            <div className="portfolio__item-image">
              <img src={project.image} alt={project.title} />
            </div>
            <h3>{project.title}</h3>
            <p>{project.category}</p>
            <div className="portfolio__item-cta">
              <a href={project.link} className="btn" target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            </div>
          </motion.div>)
        ))}
      </div>
    </section>
  );
};

export default Portfolio;


