import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import myImg from "../../Assets/avatar.svg";
// import Tilt from "react-parallax-tilt";
// import {
//   AiFillGithub,
//   AiOutlineTwitter,
//   AiFillInstagram,
// } from "react-icons/ai";
// import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
        <Col md={8} className="home-about-description">
  {/* <h1 style={{ fontSize: "2.6em" }}>
    LET ME <span className="cyan"> INTRODUCE </span> MYSELF
  </h1> */}
  <p className="home-about-body">
    I fell in love with engineering and robotics, and over time, 
    I've gained a solid foundation in various areas.
    <br />
    <br />I am proficient in tools and programming languages like
      <b className="cyan"> Python, C, C++, HTML, CSS, and JavaScript. </b>
    <br />
    <br />
    I have rich experience in multiple engineering softwares like
    <b className="cyan"> SolidWorks, Matlab,</b>
    <b className="cyan"> ArduinoIDE </b>
    &nbsp;alongside modern development environments like 
      <b className="cyan"> Raspberry Pi, VScode, Arduino,</b> and 
      <b className="cyan"> VEXcode.</b>
    <br />
    <br />
    My fields of interest include building new &nbsp;
    <b className="cyan">mechanical systems and automation </b>
    as well as &nbsp;
      <b className="cyan"> embedded systems and robotics</b>, 
    and I am also experienced in areas related to{" "}
    <b className="cyan"> Web technologies.</b>

  </p>
</Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
