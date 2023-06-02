import React from "react";

import NavbarBrand from "react-bootstrap/NavbarBrand";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Navigation = () => {
  return (
    <Navbar
      className="sticky-nav"
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
    >
      <Container class="container-fluid">
        <Row>
          <Col>
            <Navbar.Brand>
              <Image className="navIcon" src="IMG_4340.jpg" roundedCircle />
            </Navbar.Brand>
          </Col>
        </Row>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll"></Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
