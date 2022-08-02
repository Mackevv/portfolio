import React from 'react';
import HTMLTag from "../HTMLTag/HTMLTag";
import "./HeroSection.css";
import { ReactComponent as Logo } from '../../assets/logo.svg';

function HeroSection() {
  return (
    <div className="hero__container">
      <div className="hero">
        <div className="hero__text">
          <h1 className="hero-title">
            <HTMLTag name="h1" className="hero-title">
              Hello,<br/>
              My name is <strong>Macé Kevin</strong>
            </HTMLTag>
          </h1>
          <p>
            <HTMLTag name="p">
              I am a french self-taught developer interested in <strong>programming</strong> and <strong>new technologies</strong>
            </HTMLTag>
          </p>
        </div>
        <div className="hero__logo-container">
          <div className="hero__logo">
            <Logo />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;