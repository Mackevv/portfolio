import React from 'react';
import HTMLTag from "../../components/HTMLTag/HTMLTag";
import "./About.css";

function About() {
  return (
    <div className="container">
      <div className="about">
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
      </div>
    </div>
  );
}

export default About;