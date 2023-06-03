import React from "react";
import { Navigation, Projects } from "./";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

const About = () => {
  return (
    <div>
      <Navigation />
      <Container>
        <Row>
          <Col md={6}>
            <Card>
              <Card.Img
                variant=""
                src="IMG_4340.jpg"
                style={{ width: "100%" }}
              ></Card.Img>
            </Card>
          </Col>
          <Col md={6}>
            <Card>
              <Card.Body>
                <Card.Text>Hi Im Darius </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Projects />
    </div>
  );
};

export default About;
