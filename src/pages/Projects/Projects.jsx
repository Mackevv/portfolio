import React from 'react';
import FeaturedCard from "./ProjectCard/FeaturedCard";
import HTMLTag from "components/HTMLTag/HTMLTag";
import Portfolio from "assets/images/projects/mackevportfolio.jpg"
import DragonBallZ from "assets/images/projects/dragonballz.jpg";
import Totoro from "assets/images/projects/totoro.jpg";
import "./Projects.css";

function Projects() {
  return (
    <div className="container">
      <section className="projects">
        <HTMLTag name="h1" className="hero-title">
          <h1>My <strong>projects</strong></h1>
        </HTMLTag>
        <div className="featured-projects">
          <FeaturedCard
            title="Personnal Portfolio"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sed aliquet euismod velit, vitae molestie velit mollis sit amet.
            Phasellus ac sapien semper, mattis mi vitae, pellentesque lacus."
            image={Portfolio}
            imageAlt="mackev portfolio"
            tags={["React", "Netlify"]}
            link="https://github.com/Mackevv/portfolio"
          />
          <FeaturedCard
            title="Lorem ipsum"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sed aliquet euismod velit, vitae molestie velit mollis sit amet.
            Phasellus ac sapien semper, mattis mi vitae, pellentesque lacus."
            image={DragonBallZ}
            imageAlt="lorem ipsum"
            tags={["React", "MongoDB", "Express", "Vercel"]}
            link="https://github.com/Mackevv/"
          />
          <FeaturedCard
            title="Lorem ipsum"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sed aliquet euismod velit, vitae molestie velit mollis sit amet.
            Phasellus ac sapien semper, mattis mi vitae, pellentesque lacus."
            image={Totoro}
            imageAlt="lorem ipsum"
            tags={["React", "TypeScript", "Next.js", "MongoDB"]}
            link="https://github.com/Mackevv/"
          />
        </div>
      </section>
    </div>
  );
}

export default Projects;