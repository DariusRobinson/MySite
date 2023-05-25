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
      <Container className="d-flex justify-content-around">
        <Row>
          <Col xs={12}>
            <Card style={{ width: "20rem" }}>
              <Card.Img variant="top" src="Image 8-27-22 at 12.21 AM.jpg" />
              <Card.Body>
                <Card.Title>Cinema's Top 251</Card.Title>
                <Card.Text>Description</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <Card style={{ width: "20rem" }}>
              <Card.Img variant="top" src="Image 8-27-22 at 12.08 AM.jpeg" />
              <Card.Body>
                <Card.Title>Cinema's Top 251</Card.Title>
                <Card.Text>Description</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xs={8}>
            <Card style={{ width: "20rem" }}>
              <Card.Img variant="top" src="Image 8-27-22 at 12.27 AM.jpg" />
              <Card.Body>
                <Card.Title>Cinema's Top 251</Card.Title>
                <Card.Text>Description</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Projects;
