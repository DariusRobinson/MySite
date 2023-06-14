import React, { useEffect, useRef, useState } from "react";
import { Navigation, Projects, Skills } from "./";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

const About = () => {
  return (
    <section id="aboutSection">
      <Container className="my-5 mb-5">
        <h1>About Me!</h1>
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
                className="rounded-circle  shadow"
                id="aboutIMG"
              />
            </Card>
          </Col>
          <Col md={7}>
            <Card id="aboutCard" className=" bg-transparent border-0">
              <Card.Body>
                <Card.Title>A little bit about me</Card.Title>
                <Card.Text>
                  I'm a joyful Web Developer who loves to laugh, succesful
                  working both collabrotively in teams and independently.
                  Leveraging 8+ years of client service and account/operations
                  management expirience with a personal commitment to thoughtful
                  technology development and design. Professionally trained in
                  hardware/software repair and maintenance with highly
                  proficient skills in web application development. I have a
                  particular passion for developing web applications with both
                  efficient and appealing responsive UI! I'd love to chat and
                  find out how I can help you and your team!
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Container className="custom-margin-top">
        <Skills />
      </Container>
      <Container className="custom-margin-top">
        <Projects />
      </Container>
    </section>
  );
};

export default About;
