import React from "react";
// import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";


function AboutCard() {
  return (
    // <Card className="quote-card-view">
      <blockquote className="blockquote mb-0">
        <p style={{ textAlign: 'justify' }}>
          Hi Everyone, I am <span className="cyan"> Yinan Dong </span>
          from <span className="orange">Shanghai, China.</span>
          <br />
          I am currently pursuing two bachelor degrees:<br />
          <b className="blue">Data Science </b> at the University of Michigan  <br />
          <b className="red">Mechanical Engineering</b> at Shanghai Jiao Tong University.
          <br />
          <br />
          Apart from my studies, here are some other activities that I love to do!
        </p>
        <ul>
          <li className="about-activity">
            <ImPointRight /> Fishing
          </li>
          <li className="about-activity">
            <ImPointRight /> Making Videos
          </li>
          <li className="about-activity">
            <ImPointRight /> Travelling
          </li>
        </ul>
      </blockquote>
    // </Card>
  );
}

export default AboutCard;
