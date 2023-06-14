// import React from "react";
// import Button from "react-bootstrap/Button";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import Card from "react-bootstrap/Card";

// const Projects = () => {
//   return (
//     <>
//       <section id="projectsSection">
//         <Container
//           className="d-flex justify-content-center mb-5"
//           id="ProjTitleContainer"
//         >
//           <h1>Projects</h1>
//         </Container>
//         <Container className="d-flex justify-content-center p-2">
//           <Row className="row row-cols-1 row-cols-md-2 g-3">
//             <Col className="px-2">
//               <div className="projectCardWrapper">
//                 <Card className="projectCard" rounded>
//                   <Card.Img variant="top" src="Image 8-27-22 at 12.21 AM.jpg" />
//                   <Card.Body>
//                     <Card.Title>Cinema's Top 251</Card.Title>
//                     <Card.Text>Description</Card.Text>
//                     <Button>Check it Out</Button>
//                   </Card.Body>
//                 </Card>
//               </div>
//             </Col>
//             <Col className="px-2">
//               <div className="projectCardWrapper">
//                 <Card className="projectCard" rounded>
//                   <Card.Img
//                     variant="top"
//                     src="Image 8-27-22 at 12.08 AM.jpeg"
//                   />
//                   <Card.Body>
//                     <Card.Title>Cinema's Top 251</Card.Title>
//                     <Card.Text>Description</Card.Text>
//                     <Button>Check it Out</Button>
//                   </Card.Body>
//                 </Card>
//               </div>
//             </Col>
//             <Col className="px-2">
//               <div className="projectCardWrapper">
//                 <Card className="projectCard" rounded>
//                   <Card.Img variant="top" src="Image 8-27-22 at 12.27 AM.jpg" />
//                   <Card.Body>
//                     <Card.Title>Cinema's Top 251</Card.Title>
//                     <Card.Text>Description</Card.Text>
//                     <Button>Check it Out</Button>
//                   </Card.Body>
//                 </Card>
//               </div>
//             </Col>
//           </Row>
//         </Container>
//       </section>
//     </>
//   );
// };

// export default Projects;

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
          <h1>A Little of My Work</h1>
        </Container>
        <Container className="d-flex justify-content-center p-2">
          <Row className="row row-cols-1 row-cols-md-2 g-3">
            <Col className="px-2">
              <div className="projectCardWrapper">
                <Card className="projectCard" rounded>
                  <Card.Img variant="top" src="Image 8-27-22 at 12.21 AM.jpg" />
                  <Card.Body>
                    <Card.Title>Cinema's Top 251</Card.Title>
                    <Card.Text>Description</Card.Text>
                    <Button>Check it Out</Button>
                  </Card.Body>
                </Card>
              </div>
            </Col>

            <Col className="px-2">
              <div className="projectCardWrapper">
                <Card className="projectCard" rounded>
                  <Card.Img variant="top" src="Image 8-27-22 at 12.27 AM.jpg" />
                  <Card.Body>
                    <Card.Title>Cinema's Top 251</Card.Title>
                    <Card.Text>Description</Card.Text>
                    <Button>Check it Out</Button>
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
                    <Card.Title>Cinema's Top 251</Card.Title>
                    <Card.Text>Description</Card.Text>
                    <Button>Check it Out</Button>
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
                    <Card.Text>Description</Card.Text>
                    <Button>Check it Out</Button>
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
