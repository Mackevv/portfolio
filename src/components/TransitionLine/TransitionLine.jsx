import React from 'react';
import "./TransitionLine.css";

function TransitionLine({ flip }) {
  return (
    <div className="transition-line__container">
      <div className={`transition-line__wrapper ${flip ? "flip" : ""}`}>
        <div className="left-ball"></div>
        <svg id="transition-line" fill="none" viewBox="-1 0 502 140" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0 0V70H500V140" stroke="#2988FF" strokeWidth="2"/> :
        </svg>
        <div className="right-ball"></div>
      </div>
    </div>
  );
}

export default TransitionLine;