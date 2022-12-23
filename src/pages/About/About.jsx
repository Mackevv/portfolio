import React, { useState } from 'react';
import HTMLTag from "../../components/HTMLTag/HTMLTag";
import TransitionLine from "../../components/TransitionLine/TransitionLine";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import TechStack from "./TechStack";
import "./About.css";

function About() {
  const [skills, setSkills] = useState(true)

  return (
    <div className="container">
      <section className="about">
        <HTMLTag name="h1" className="hero-title">
          <h1>About <strong>me</strong></h1>
        </HTMLTag>
        <HTMLTag name="p">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et feugiat quam. Duis pretium placerat ultricies.
            Morbi in tincidunt mauris. Ut nec nulla accumsan tellus laoreet egestas non eu nunc. Aenean a vestibulum dui.
            Nullam volutpat, tortor vel ullamcorper vehicula, ligula nibh porta erat, vel dictum ipsum dui at velit.
            sollicitudin lorem non, suscipit risus. Pellentesque mattis euismod nibh at consectetur.
            <br/><br/>
            Nam arcu diam, rutrum eu pretium vel, laoreet nec elit. Curabitur porttitor nunc quam Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Aenean elementum tellus luctus mauris.
            <br/><br/>
            Nulla facilisi. Proin vehicula, quam eu iaculis mollis, arcu mauris mattis urna, sit amet euismod ante ligula ac lacus.
            Duis interdum, elit sit amet finibus commodo, lorem sapien tincidunt ipsum, nec commodo magna ipsum sed dolor.
            Donec pulvinar vitae dui sit amet lobortis.
          </p>
        </HTMLTag>
      </section>
      <TransitionLine />
      <section className="skills">
        <div className="skills-heading">
          <SectionTitle className="skills-heading__title">My skills</SectionTitle>
          <HTMLTag name="p">
            <p className="skills-heading__description">
              Here are some&nbsp;
              {skills ?
              "programming languages and technologies I have already work with" : "tools that I use on a daily basis to help me in my work"
              }.
            </p>
          </HTMLTag>
        </div>
        <div className="skills-tech">
          <div className="skills-tech__toggle">
            <button
              className={skills ? 'selected' : ''}
              onClick={() => setSkills(true)}
            >
              Programming
            </button>
            <button
              className={!skills ? 'selected' : ''}
              onClick={() => setSkills(false)}
            >
              Tools
            </button>
          </div>
          <TechStack skills={skills}/>
        </div>
      </section>
      <TransitionLine flip={true} />
      <section className="experience">
        <SectionTitle>My experience</SectionTitle>
        <div>
          <span className="wip">Work in progress... 🚧</span>
        </div>
      </section>
    </div>
  );
}

export default About;