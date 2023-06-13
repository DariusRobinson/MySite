import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const Projects = () => {
  return (
    <>
      <section id="projectsSection">
        <Container id="ProjTitleContainer">
          <h1>Projects</h1>
        </Container>
        <Container className="d-flex justify-content-center p-2">
          <Row className="row row-cols-1 row-cols-md-2 g-3">
            <Col className="px-2">
              <Card rounded>
                <Card.Img variant="top" src="Image 8-27-22 at 12.21 AM.jpg" />
                {/* <Card.Body>
                <Card.Title>Cinema's Top 251</Card.Title>
                <Card.Text>Description</Card.Text>
              </Card.Body> */}
              </Card>
            </Col>
            <Col className="px-2">
              <Card rounded>
                <Card.Img variant="top" src="Image 8-27-22 at 12.08 AM.jpeg" />
                {/* <Card.Body>
                <Card.Title>Cinema's Top 251</Card.Title>
                <Card.Text>Description</Card.Text>
              </Card.Body> */}
              </Card>
            </Col>
            <Col className="px-2">
              <Card rounded>
                <Card.Img variant="top" src="Image 8-27-22 at 12.27 AM.jpg" />
                {/* <Card.Body>
                <Card.Title>Cinema's Top 251</Card.Title>
                <Card.Text>Description</Card.Text>
              </Card.Body> */}
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Projects;
