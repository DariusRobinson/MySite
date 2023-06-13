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
      expand="md"
      bg="light"
      variant="light"
      fixed="top"
      style={{ padding: "10px" }}
    >
      <Container className="container-fluid ">
        <Row>
          <Col>
            <Navbar.Brand>Darius Robinson</Navbar.Brand>
          </Col>
        </Row>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <ul className="navbar-nav mr-auto my-2 my-lg-0">
            <li className="nav-item">
              <Link
                className="nav-link"
                activeClass="active"
                to="aboutSection"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                activeClass="active"
                to="skillsSection"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Skills
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                activeClass="active"
                to="projectsSection"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Projects
              </Link>
            </li>
          </ul>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
