import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { Navigation, Projects, About } from "./";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<About />} />
        <Route path="/portfolio" element={<Projects />} />
      </Routes>
    </Router>
  );
};

export default App;
