import "./work.css";
import Works from "./Works";
import ProjectSlider from "./ProjectSlider";

const Work = () => {
  return (
    <section class="work section" id="portfolio">
      <h2 class="section__title">Portfolio</h2>
      <span class="section__subtitle">Most Recent Projects</span>

      {/* <Works /> */}
      <ProjectSlider />

    </section>
  );
};

export default Work;
