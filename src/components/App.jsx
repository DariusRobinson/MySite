import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navigation, Projects, Skills, Footer, About } from "./";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import ContactMe from "./ContactMe";

const App = () => {
  return (
    <>
      <Navigation />
      <Container>
        <About />
      </Container>
      <Container className="custom-margin-top">
        <Skills />
      </Container>
      <Container className="custom-margin-top">
        <Projects />
      </Container>
      <Container className="custom-margin-top">
        <ContactMe />
      </Container>
      <Container className="mt-5">
        <Footer />
      </Container>
    </>
  );
};

export default App;
