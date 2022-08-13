import React from 'react';
import HTMLTag from "../HTMLTag/HTMLTag";
import "./SectionTitle.css";

function SectionTitle({ sectionName, className }) {
  const words = sectionName.split(' ');

  return (
    <div className={className}>
      <HTMLTag name="h2" className="section-title">
        <h2 className="section-title">
          {words[0]} <strong>{words[1]}</strong>
        </h2>
      </HTMLTag>
    </div>
  );
}

export default SectionTitle;