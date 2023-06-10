import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { Navigation, Projects, About } from "./";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<About id="section1" />} />
        <Route path="/portfolio" element={<Projects id="section2" />} />
      </Routes>
    </Router>
  );
};

export default App;
