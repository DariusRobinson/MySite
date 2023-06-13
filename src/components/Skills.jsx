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
      <Container className="d-flex justify-content-center p-2">
        <Row className="row row-cols-1 row-cols-md-3 g-3">
          <Col>
            <Card id="skillsCard" rounded>
              <Card.Header className="d-flex justify-content-center">
                <h4>Web Developer</h4>
              </Card.Header>
              <Card.Body>
                <Card.Text>
                  I'm a joyful Web Developer who loves to laugh, succesful
                  working both collabrotively in teams and independently.
                  Leveraging 8+ years of client service and account/operations
                  management expirience with a personal commitment to thoughtful
                  technology development and design.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card rounded>
              <Card.Header className="d-flex justify-content-center">
                <h4>Account&Operations Management</h4>
              </Card.Header>
              <Card.Body>
                <Card.Text>
                  I'm a joyful Web Developer who loves to laugh, succesful
                  working both collabrotively in teams and independently.
                  Leveraging 8+ years of client service and account/operations
                  management expirience with a personal commitment to thoughtful
                  technology development and design.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card id="skillsCard" rounded>
              <Card.Header className="d-flex justify-content-center">
                <h4>IT Professional</h4>
              </Card.Header>
              <Card.Body>
                <Card.Text>
                  I'm a joyful Web Developer who loves to laugh, succesful
                  working both collabrotively in teams and independently.
                  Leveraging 8+ years of client service and account/operations
                  management expirience with a personal commitment to thoughtful
                  technology development and design.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Skills;
