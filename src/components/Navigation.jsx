import React from "react";

import NavbarBrand from "react-bootstrap/NavbarBrand";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { Link, animateScroll as scroll, scroller } from "react-scroll";

const Navigation = () => {
  const scrollTo = (id) => {
    scroller.scrollTo(id, {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  return (
    <Navbar
      className="sticky-nav"
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
    >
      <Container className="container-fluid">
        <Row>
          <Col>
            <Navbar.Brand>
              <Image className="navIcon" src="IMG_4340.jpg" roundedCircle />
            </Navbar.Brand>
          </Col>
        </Row>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <ul className="navbar-nav mr-auto my-2 my-lg-0">
            <li className="nav-item">
              <Link
                className="nav-link"
                activeClass="active"
                to="section1"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Section 1
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                activeClass="active"
                to="section2"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Section 2
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                activeClass="active"
                to="section3"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Section 3
              </Link>
            </li>
          </ul>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
