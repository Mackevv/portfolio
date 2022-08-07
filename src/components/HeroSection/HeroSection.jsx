import React, {useEffect, useState} from 'react';
import HTMLTag from "../HTMLTag/HTMLTag";
import "./HeroSection.css";
import { ReactComponent as Logo } from '../../assets/logo.svg';

function HeroSection() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, [width]);

  return (
    <div className="hero__container">
      <div className="hero">
        <div className="hero__text">
          <HTMLTag name="h1" className="hero-title">
            <h1 className="hero-title">
              Hello,<br/>
              My name is <strong>Macé Kevin</strong>
            </h1>
          </HTMLTag>
          <HTMLTag name="p">
            <p>
              I am a french self-taught developer interested in <strong>programming</strong> and <strong>new technologies</strong>
            </p>
          </HTMLTag>
        </div>
        {
          width <= 1185 ? "" :
          <div className="hero__logo-container">
            <div className="hero__logo">
              <Logo />
            </div>
            <div className="inside-spin">
              <div className="inside-arc inside-arc-left"></div>
              <div className="inside-arc inside-arc-right"></div>

              <div className="inside-ball inside-ball-left__start">
                <div></div>
              </div>
              <div className="inside-ball inside-ball-left__end">
                <div></div>
              </div>
              <div className="inside-ball inside-ball-right__start">
                <div></div>
              </div>
              <div className="inside-ball inside-ball-right__end">
                <div></div>
              </div>
            </div>
            <div className="outside-spin">
              <div className="outside-arc"></div>

              <div className="outside-ball outside-ball__start">
                <div></div>
              </div>
              <div className="outside-ball outside-ball__end">
                <div></div>
              </div>
            </div>
          </div>
        }
      </div>
    </div>
  );
}

export default HeroSection;