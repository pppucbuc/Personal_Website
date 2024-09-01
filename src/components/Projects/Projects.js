import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import ME350_1 from "../../Assets/Projects/ME350_1.jpg";
import ME350_2 from "../../Assets/Projects/ME350_2.jpg";
import asia_open_1 from "../../Assets/Projects/asia_open_1.jpg";
import asia_open_2 from "../../Assets/Projects/asia_open_2.jpg";
import asia_open_3 from "../../Assets/Projects/asia_open_3.jpg";
import championship_1 from "../../Assets/Projects/championship_1.jpg";
import championship_2 from "../../Assets/Projects/championship_2.jpg";
import championship_3 from "../../Assets/Projects/championship_3.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPaths={[ME350_1, ME350_2]}
              isBlog={false}
              title="Autonomous Climbing Robot"
              description="This is the final project of ME350 course. It is controlled by Raspberry Pi and integrates gyroscope, motor encoders, and camera. The robot utilizes the gyroscope and motor encoders to continuously adjust its path from the road's edges. The camera allows the robot to recognize road signs and make informed decisions. Its robot arm can hold the robot up, making it climb on steps. Its tank tracks help it travel on sand easily."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPaths={[championship_1, championship_2, championship_3]}
              isBlog={false}
              title="Robots for 2023-24 VEX Robotics World Championship"
              description="These robots were built by Shanghai Jiao Tong University VEX Robotics Team for 2023-24 VEX Robotics World Championship. The entire structure is crafted using milled parts. The large robot's chassis is powered by 8 motors, while the smaller one is driven by 12 motors. Both robots are equipped with gyroscopes, tracking wheels, and motor encoders for precise path planning and autonomous navigation. Pneumatic systems are extensively used throughout the robots to control wings, shovels, and climbers, assisting in specific scoring tasks such as pushing balls into holes and climbing scoring poles. These are likely among the most powerful machines that undergraduates can build at the university level."
              ghLink="https://github.com/SJTU-VEX/24-Turtle"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPaths={[asia_open_1, asia_open_2, asia_open_3]}
              isBlog={false}
              title="Robots for 2023-24 VEX Robotics Asia Open Finals"
              description="These robots were built by the Shanghai Jiao Tong University VEX Robotics Team for 2023-24 VEX Robotics Asia Open Finals. The entire structure is crafted using sheet metal components. Both robots utilize motor encoders and gyroscopes for precise path planning and autonomous navigation. Pneumatic systems are extensively used throughout the robots to control wings, shovels, and climbers, assisting in specific scoring tasks such as pushing balls into holes and climbing scoring poles. These are likely among the most powerful machines that undergraduates can build at the university level."
              ghLink="https://github.com/SJTU-VEX/24-Big"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
