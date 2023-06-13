import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Skills = () => {
  return (
    <section id="skillsSection">
      <Container className="d-flex justify-content-center p-2">
        <h1>Skills</h1>
      </Container>
      <Container lassName="d-flex justify-content-center p-2">
        <Row>
          <Col id="skillsCard">
            <Card></Card>
            <Card.Header>
              <h4>Technical Skills</h4>
            </Card.Header>
            <Card.Body>
              <Card.Text>
                I'm a joyful Web Developer who loves to laugh, succesful working
                both collabrotively in teams and independently. Leveraging 8+
                years of client service and account/operations management
                expirience with a personal commitment to thoughtful technology
                development and design.
              </Card.Text>
            </Card.Body>
          </Col>
          <Col>
            <Card.Header>Technical Skills</Card.Header>
            <Card.Body>
              <Card.Text>
                I'm a joyful Web Developer who loves to laugh, succesful working
                both collabrotively in teams and independently. Leveraging 8+
                years of client service and account/operations management
                expirience with a personal commitment to thoughtful technology
                development and design.
              </Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Skills;
