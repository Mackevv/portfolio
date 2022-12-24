import React from 'react';
import Icon from "components/Icon";
import Php from "assets/icons/php.png";
import PhpStorm from "assets/icons/phpstorm.png";
import WebStorm from "assets/icons/webstorm.png";


function Tools() {
  return (
    <>
      <div><img src={PhpStorm} alt="PhpStorm logo" className="icon" width={60} /></div>
      <div><img src={WebStorm} alt="Webstorm logo" className="icon" width={60} /></div>
      <div><Icon name="vscode" size={60}/></div>
      <div><Icon name="git" size={60}/></div>
      <div><Icon name="github" size={60}/></div>
      <div><Icon name="netlify" size={60}/></div>
      <div><Icon name="photoshop" size={60} /></div>
      <div><Icon name="illustrator" size={60} /></div>
      <div><Icon name="figma" size={60}/></div>
    </>
  )
}
function Programming() {
  return (
    <>
      <div><Icon name="html5" size={60} /></div>
      <div><Icon name="css3" size={60}/></div>
      <div><Icon name="javascript" size={60} /></div>
      <div><Icon name="nodejs" size={60} /></div>
      <div><Icon name="sass" size={60} /></div>
      <div><Icon name="react" size={60} /></div>
      <div><Icon name="mongodb" size={60} /></div>
      <div><Icon name="mysql" size={80} /></div>
      <div><img src={Php} alt="Php logo" className="icon" width={70} /></div>
      <div><Icon name="symfony" size={60} /></div>
      <div><Icon name="c" size={60} /></div>
    </>
  );
}

function TechStack({ skills }) {

  return (
    <div className="skills-tech__stack">
      {skills ? <Programming/> : <Tools />}
    </div>
  );
}

export default TechStack;