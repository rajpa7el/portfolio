// Portfolio.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { projectsData } from "./Data";
import "./portfolio.css";
import { motion } from "framer-motion";

// const Portfolio = () => {
//   return (
//     <section className="portfolio section" id="portfolio">
//       <div className="container">
//         <h2 class="section__title">Portfolio</h2>
//         <span class="section__subtitle">Most recent work</span>
//         <Swiper
//           spaceBetween={30}
//           centeredSlides={true}
//           autoplay={{
//             delay: 4000,
//             disableOnInteraction: false,
//           }}
//           pagination={{
//             clickable: true,
//             type: "progressbar",
//           }}
//           navigation={true}
//           modules={[Autoplay, Pagination, Navigation]}
//           className="mySwiper"
//         >
//           {projectsData.map((project) => (
//             <SwiperSlide key={project.id}>
//               <div className="portfolio__item">
//                 <img
//                   src={project.image}
//                   alt={project.title}
//                   className="portfolio__img"
//                 />
//                 <h3 className="portfolio__title">{project.title}</h3>
//                 <span className="portfolio__category">{project.category}</span>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </section>
//   );
// };

// export default Portfolio;

const Portfolio = () => {
    return (
      <section className="portfolio section" id="portfolio">
        <div className="container">
          <motion.h2
            className="section__title"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Portfolio
          </motion.h2>
          <motion.span
            className="section__subtitle"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Most recent work
          </motion.span>
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              type: "progressbar",
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            {projectsData.map((project) => (
              <SwiperSlide key={project.id}>
                <motion.div
                  className="portfolio__item"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="portfolio__img"
                  />
                  <h3 className="portfolio__title">{project.title}</h3>
                  <span className="portfolio__category">{project.category}</span>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    );
  };
  
  export default Portfolio;
  

