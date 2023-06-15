import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

const Projects = () => {
  return (
    <>
      <section id="projectsSection">
        <Container
          className="d-flex justify-content-center mb-5"
          id="ProjTitleContainer"
        >
          <h1>Personal Projects</h1>
        </Container>
        <Container className="d-flex justify-content-center p-2">
          <Row className="row row-cols-1 row-cols-md-2 g-3">
            <Col className="px-2">
              <div className="projectCardWrapper">
                <Card className="projectCard" rounded>
                  <Card.Img variant="top" src="Image 8-27-22 at 12.21 AM.jpg" />
                  <Card.Body>
                    <Card.Title>Cinema's Top 251</Card.Title>
                    <Card.Text>
                      E-commerce Site for purchasing the top 251 ranked movies
                      in the world! Be sure to check out Feeling vs. Felt, a
                      real treat!
                    </Card.Text>
                    <Card.Footer>
                      FullStack Web application leveraging: React, Express,
                      Node, JavaScript, HTML, CSS, and PostgreSQL
                    </Card.Footer>
                    <Button
                      className="lastButton"
                      href="https://obscure-harbor-35179.herokuapp.com/"
                    >
                      Check it Out
                    </Button>
                  </Card.Body>
                </Card>
              </div>
            </Col>

            <Col className="px-2">
              <div className="projectCardWrapper">
                <Card className="projectCard" rounded>
                  <Card.Img variant="top" src="Image 8-27-22 at 12.27 AM.jpg" />
                  <Card.Body>
                    <Card.Title>Strangers Things</Card.Title>
                    <Card.Text>
                      If you don't need it, someone will! Strangers things is
                      the place for you.. and strangers to exchange things!{" "}
                    </Card.Text>
                    <Card.Footer>
                      Front-End CRUD Application leveraging: React, Redux, HTML,
                      CSS, and JavaScript
                    </Card.Footer>
                    <Button
                      className="lastButton"
                      href="https://bright-rugelach-05336a.netlify.app/"
                    >
                      Check it Out
                    </Button>
                  </Card.Body>
                </Card>
              </div>
            </Col>
            <Col className="px-2">
              <div className="projectCardWrapper">
                <Card className="projectCard" rounded>
                  <Card.Img
                    variant="top"
                    src="Image 8-27-22 at 12.08 AM.jpeg"
                  />
                  <Card.Body>
                    <Card.Title>Fitness Tracker</Card.Title>
                    <Card.Text>
                      You want to work out but don't know what to do, or when to
                      do it? Fitness Tracker allows you to create and view
                      others workout plans to keep up to date and get some
                      inspiration! Nothing holding you back now!
                    </Card.Text>
                    <Card.Footer>
                      FullStack Web application leveraging: React, Express,
                      Node, JavaScript, HTML, CSS, and PostgreSQL
                    </Card.Footer>
                    <Button
                      className="lastButton"
                      href="https://musical-torrone-b4f42d.netlify.app/"
                    >
                      Check it Out
                    </Button>
                  </Card.Body>
                </Card>
              </div>
            </Col>
            <Col className="px-2">
              <div className="projectCardWrapper">
                <Card className="projectCard" rounded>
                  <Card.Img variant="top" src="image 6-14-23.jpeg" />
                  <Card.Body>
                    <Card.Title>My first Personal Site!</Card.Title>
                    <Card.Text>
                      Where I started! Humble beginnings in the truest sense,
                      now it's on my new and improved portfolio! Ever forward
                      and always imporvoving! Take a look at my first personal
                      site.. and please enjoy that skills bar!
                    </Card.Text>
                    <Card.Footer>
                      Single Page application leveraging: React, HTML, CSS, and
                      JavaScript
                    </Card.Footer>
                    <Button
                      className="lastButton"
                      href="https://thedariusrobinson.netlify.app/"
                    >
                      Check it Out
                    </Button>
                  </Card.Body>
                </Card>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Projects;
