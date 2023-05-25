import React from "react";
import { Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
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
          <Col sm={1}>
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
          <Col sm={1}>
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
          <Col sm={1}>
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
