import React from 'react';
import HeroSection from "../../components/HeroSection/HeroSection";
import HTMLTag from "../../components/HTMLTag/HTMLTag";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import TransitionLine from "../../components/TransitionLine/TransitionLine";
import ContactSection from "../../components/ContactSection/ContactSection";
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
                Hello! My name is Kevin and I am a young french developer. I enjoy creating things on the Internet and always
                want to learn more about new technologies such as artificial intelligence.
                Although it’s not my favorite activity, I am also interested in graphic and UI/UX design.
              </p>
              <p>
                My favorites technologies to build website are JavaScript (TypeScript), Node.js, React, Sass.
              </p>
              <p>
                Outside programming, I like practicing daily calisthenics to remain in a good shape,
                read manga and watch anime during my free time.
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