import React from "react";
import { Navigation, Projects, Skills, Footer } from "./";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const About = () => {
  return (
    <section id="aboutSection" style={{ marginTop: "100px" }}>
      <Container className="mb-5">
        <></>
      </Container>
      <Container className="my-5 mb-5 custom-margin-top-start">
        <Row className="align-items-center">
          <Col md={5}>
            <Card className="shadow-none bg-transparent border-0 p-0">
              <Card.Img
                src="IMG_8160.jpeg"
                style={{
                  width: "100%",
                  height: "auto",
                  background: "transparent",
                }}
                className="rounded-circle shadow"
                id="aboutIMG"
              />
            </Card>
          </Col>
          <Col md={7}>
            <Card id="aboutCard" className="bg-transparent border-0">
              <Card.Body>
                <Card.Title>Hi! Im Darius</Card.Title>
                <Card.Text>
                  I'm a joyful Web Developer who loves spending time with family
                  and loves to laugh. Successful working both collaboratively in
                  teams and independently. Leveraging 8+ years of client service
                  and account/operations management experience with a personal
                  commitment to thoughtful technology development and design.
                  Professionally trained in hardware/software repair and
                  maintenance with highly proficient skills in web application
                  development. I have a particular passion for developing web
                  applications with both efficient and appealing responsive UI!
                  I'd love to chat and find out how I can help you and your
                  team!
                </Card.Text>
              </Card.Body>
            </Card>
            <Container id="resumeButton">
              <Button
                className="resumeButton"
                style={{
                  backgroundColor: "transparent",
                  borderColor: "black",
                  color: "black",
                }}
                href="https://drive.google.com/file/d/1QBkqTfwuLjP3cOCBNXoy5fbYKJjuNaRR/view?usp=drive_link/view
              "
              >
                Resume
              </Button>
            </Container>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
