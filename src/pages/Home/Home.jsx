import React from 'react';
import HeroSection from "./HeroSection/HeroSection";
import HTMLTag from "@/components/HTMLTag/HTMLTag";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import TransitionLine from "@/components/TransitionLine/TransitionLine";
import ContactSection from "./ContactSection/ContactSection";
import "./Home.css";

function Home() {
  return (
    <>
      <HeroSection />
      <div className="container">
        <TransitionLine />
        <div className="about-section">
          <div className="about__content">
            <HTMLTag name="p">
              <p>
                Hello! I am currently a first year computer science student at <a href="https://ensimag.grenoble-inp.fr/en" rel="noreferrer nofollow" className="link">Ensimag</a>, 
                an engineering school located in Grenoble, France. My current
                interests are cybersecurity and electronics but I am always 
                willing to learn new science related things. I also studied general 
                mathematics, physics and computer science theory during two years in 
                CPGE.
              </p>
              <p>
                I am interested in space exploration, therefore I would like
                to build a professionnal career around the space industry.
              </p>
            </HTMLTag>
          </div>
          <SectionTitle className="about__title">About me</SectionTitle>
        </div>
        <TransitionLine flip={true} />
        <ContactSection/>
      </div>
    </>
  );
}

export default Home;
