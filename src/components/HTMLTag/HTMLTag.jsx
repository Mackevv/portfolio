import React from 'react';
import "./HTMLTag.css";

function ClassText({ className }) {
  return (
    <>
      <span className="html-tag__class-attribute">&nbsp;class</span>
      =<span className="html-tag__class-content">"{className}"</span>
    </>
  )
}

function HTMLTag({ name, className, children}) {
  return (
    <>
      <code className="html-tag html-tag__opening">
        &lt;{name}{className ? <ClassText className={className} /> : ''}&gt;
      </code>
      {children}
      <code className="html-tag html-tag__closing">&lt;/{name}&gt;</code>
    </>
  );
}

export default HTMLTag;