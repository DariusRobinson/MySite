import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { Navigation, Projects, About, Skills } from "./";

const App = () => {
  return (
    <>
      <Navigation />
      <Router>
        <Routes>
          <Route exact path="/" element={<About />} />
          <Route path="/portfolio" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
