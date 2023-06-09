import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Skills = () => {
  return (
    <section id="skillsSection">
      <Container className="d-flex justify-content-center mb-5 p-2">
        <h1>Developed Skills</h1>
      </Container>
      <Container className="d-flex justify-content-center p-2">
        <Row className="row row-cols-1 row-cols-md-3 g-3">
          <Col>
            <Card id="skillsCard" rounded>
              <Card.Header className="skillsCard  d-flex justify-content-center">
                <h4>Web Developer</h4>
              </Card.Header>
              <Card.Body>
                <Card.Text>
                  JavaScript | React | Express | Redux | Node.js | HTML | CSS3 |
                  PostgreSQL | C# | .NET | Ajax | Microsoft SQLServer | Visual
                  Studio | Visual Studio Code | Azure Portal | Azure Data Studio
                  | Azure Repos | Git | GitHub | JSON | Bootstrap
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card id="skillCard" rounded>
              <Card.Header className="skillsCard d-flex justify-content-center">
                <h4>Account and Operations Management</h4>
              </Card.Header>
              <Card.Body>
                <Card.Text>
                  Leadership | Team Management | Decision-making | Communication
                  | Customer Service | Collaboration | Adaptability | Training |
                  Accountability | Learning Agility | Analytical Thinking
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card id="skillsCard" rounded>
              <Card.Header className="skillsCard d-flex justify-content-center">
                <h4>IT Professional</h4>
              </Card.Header>
              <Card.Body>
                <Card.Text>
                  IT Support for computers, scanners, printers.. | Hardware
                  repair for computers, phones, tablets | Software repair |
                  Microsoft 365 & Active directory administration | Microsoft
                  office suite | Technical documentation | Azure | Cloud pc
                  administration
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Skills;
