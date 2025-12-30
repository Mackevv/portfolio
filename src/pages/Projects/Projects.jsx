import React, { useState } from 'react';
import FeaturedCard from "./ProjectCard/FeaturedCard";
import ProjectDir from "./ProjectDir/ProjectDir";
import ProjectFile from "./ProjectFile/ProjectFile";
import ProjectPopup from "./ProjectPopup/ProjectPopup";
import HTMLTag from "@/components/HTMLTag/HTMLTag";
import TransitionLine from "@/components/TransitionLine/TransitionLine";
import Portfolio from "@/assets/images/projects/mackevportfolio.jpg"
import DragonBallZ from "@/assets/images/projects/dragonballz.jpg";
import Totoro from "@/assets/images/projects/totoro.jpg";
import "./Projects.css";

const webProjects = [
  {
    name: "immonord77",
    desc: "A real estate website with admin dashboard to manage addition, editing and deletion of property with image slider and automatic watermark. Blog management with markdown support and comment section without authentication. I don't want to use PHP anymore. Logo and website designed by me.",
    techstack: ["PHP", "Symfony", "MySQL"],
    link: "https://www.immonord77.com",
    repo: null,
    size: "101M",
    createdAt: new Date("5/29/21")
  },
  {
    name: "rhino-docs",
    desc: "A documentation website created for the Rhino programming language. Dark mode button, search through documentation button and use of markdown to create documentation pages. Still in development. Logo and website designed by me.",
    techstack: ["React", "Nextjs", "TailwindCSS", "PostgreSQL"],
    link: null,
    repo: "https://github.com/RhinoLang/docs",
    size: "11M",
    createdAt: new Date("11/15/25")
  },
  {
    name: "personal-portfolio",
    desc: "The website you're currently browsing. Still designed by me.",
    techstack: ["React", "Vite"],
    link: "mackev.netlify.app",
    repo: "https://github.com/Mackevv/portfolio.git",
    size: "94M",
    createdAt: new Date("7/31/22")
  }
]

const electronicsProjects = [
  {
    name: "bird-detector",
    desc: "WIP...",
    techstack: ["Arduino"],
    link: null,
    repo: null,
    size: "1Ko",
    createdAt: new Date("12/23/25")
  }
]

function Projects() {
  const [isPopupOpen, setIsPopupOpen] = useState(false)
  const [openedFile, setOpenedFile] = useState(null)

  const openPopup = (name) => {
    setIsPopupOpen(true)
    setOpenedFile(name)
  }

  const closePopup = () => {
    setIsPopupOpen(false)
    setOpenedFile(null)
  }

  return (
    <div className="container">
      <div className="projects__hero-header">
        <HTMLTag name="h1" className="hero-title">
          <h1>My <strong>projects</strong></h1>
        </HTMLTag>
      </div> 
      <HTMLTag name="section" className="pinned-projects">
        <section className="pinned-projects">
          <div className="featured-projects">
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
      </HTMLTag>
      <TransitionLine />
      <HTMLTag name="section" className="projects-tree">
        <section className="projects-tree">
          <ProjectDir dirname="web" >
            {webProjects.map(project => ( 
              <ProjectFile
                key={project.name}
                name={project.name}
                desc={project.desc}
                techstack={project.techstack}
                link={project.link}
                repo={project.repo}
                size={project.size}
                createdAt={project.createdAt.toLocaleDateString()}
                isOpen={isPopupOpen && openedFile == project.name}
                onOpen={() => openPopup(project.name)}
                onClose={closePopup}
              />
            ))}
          </ProjectDir>
          <ProjectDir dirname="electronics">
            {electronicsProjects.map(project => (
              <ProjectFile
                key={project.name}
                name={project.name}
                desc={project.desc}
                techstack={project.techstack}
                link={project.link}
                repo={project.repo}
                size={project.size}
                createdAt={project.createdAt.toLocaleDateString()}
                isOpen={isPopupOpen && openedFile == project.name}
                onOpen={() => openPopup(project.name)}
                onClose={closePopup}
              />
            ))}
          </ProjectDir>
        </section>
       </HTMLTag>
    </div>
  );
}

export default Projects;
