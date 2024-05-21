import React, { useState, useEffect } from "react";
import { projectsData } from "./Data";
import WorkItems from "./WorkItems";

const ProjectSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    let timer;
    if (isPlaying) {
      timer = setInterval(() => {
        setCurrentSlide((prevSlide) =>
          prevSlide === projectsData.length - 1 ? 0 : prevSlide + 1
        );
      }, 5000);
    }

    return () => {
      clearInterval(timer);
    };
  }, [isPlaying]);

  const goToSlide = (slideIndex) => {
    setCurrentSlide(slideIndex);
  };

  const goToPreviousSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? projectsData.length - 1 : prevSlide - 1
    );
  };

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === projectsData.length - 1 ? 0 : prevSlide + 1
    );
  };

  const togglePlayPause = () => {
    setIsPlaying((prevState) => !prevState);
  };

  return (
    <div className="work__slider">
      <div
        className="work__slider-inner"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {projectsData.map((item) => (
          <div className="work__slider-item" key={item.id}>
            <WorkItems item={item} />
          </div>
        ))}
      </div>
      <div className="work__slider-nav">
        {projectsData.map((_, index) => (
          <span
            key={index}
            className={`work__slider-nav-dot ${
              index === currentSlide ? "active" : ""
            }`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
      <div className="work__slider-arrows">
        <button className="work__slider-arrow prev" onClick={goToPreviousSlide}>
          &lt;
        </button>
        <button className="work__slider-arrow next" onClick={goToNextSlide}>
          &gt;
        </button>
      </div>
      <button className="work__slider-playpause" onClick={togglePlayPause}>
        {isPlaying ? "Pause" : "Play"}
      </button>
    </div>
  );
};

export default ProjectSlider;