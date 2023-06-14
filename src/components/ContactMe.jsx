import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const ContactMe = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = () => {
    const subject = `${name} reached out to you from your personal site`;
    const body = message;
    const email = "robinson.darius090@gmail.com";
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contactSection">
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} sm={8} md={6}>
            <div className="contact-form">
              <h2>Contact Me</h2>
              <Form>
                <Form.Group controlId="nameInput">
                  <Form.Label>Name:</Form.Label>
                  <Form.Control
                    type="text"
                    value={name}
                    onChange={handleNameChange}
                  />
                </Form.Group>
                <Form.Group controlId="messageInput">
                  <Form.Label>Message:</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    value={message}
                    onChange={handleMessageChange}
                  />
                </Form.Group>
                <Button
                  className="contactButton"
                  style={{
                    backgroundColor: "transparent",
                    borderColor: "black",
                    color: "black",
                  }}
                  variant="primary"
                  onClick={handleSubmit}
                >
                  Submit
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactMe;
