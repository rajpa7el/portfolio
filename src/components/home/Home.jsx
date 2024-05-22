import "./home.css";
import { useEffect } from 'react';
import Data from "./Data";
import Social from "./Social";
import { motion } from "framer-motion";
import toast, { Toaster } from 'react-hot-toast';

const Home = () => {
  const profileAnimation = {
    animate: {
      borderRadius: [
        "60% 40% 30% 70% / 60% 30% 70% 40%",
        "30% 60% 70% 40% / 50% 60% 30% 60%",
        "60% 40% 30% 70% / 60% 30% 70% 40%",
      ],
      transition: {
        duration: 6,
        repeatType: "loop",
        ease: "easeInOut",
        repeat: Infinity,
      },
    },
  };

  useEffect(() => {
    toast('Still working on my website...', {
      icon: '🚧',
      style: {
        borderRadius: '10px',
        background: 'hsl(var(--hue), var(--sat), 0%)', // Using the CSS variable for dark mode
        color: '#fff',
      },
    });
  }, []);

  return (
    <section className="home section" id="home">
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
      <div className="home__container container grid">
        <div className="home__content grid">
          <Social />
          <motion.div initial={{ opacity: 0, x: 50, y: -50 }} animate={{ opacity: 1, x: 0, y: 0 }} transition={{ duration: 2 }}>
            <motion.div
              animate={{...profileAnimation.animate}}
              className="home__img profiles__animate"
            ></motion.div>
          </motion.div>

          <Data />
        </div>
      </div>
    </section>
  );
};

export default Home;
