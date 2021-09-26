import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const Register = () => {
  return (
    <Container>
      <Row xs={1} md={1} lg={2} className="justify-content-center">
        {/* <Col>
          <Container style={{ color: "white" }} className="login-side-div">
            <Row>
              <Col>
                <h3>Login to Gabpals</h3>
                <p>Sign into your gabpals account!</p>
              </Col>
            </Row>
          </Container>
        </Col> */}
        <Col>
          <Form className="login-form p-5">
            <Row>
              <h3>Create a free account</h3>
            </Row>
            <Row>
              <Col xs="8">
                <Form.Group className="mb-3" controlId="formBasicUsername">
                  <Form.Control
                    type="username"
                    placeholder="Choose unique username"
                    onChange={(e) => {
                      console.log(e.target.value);
                    }}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Button variant="secondary"> Check availibility</Button>
              </Col>
            </Row>

            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="formBasicPhone">
                  <Form.Label>Phone</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Enter phone number"
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Re-enter Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
              </Col>
            </Row>

            <div
              style={{
                display: "flex",
                width: "100%",
                justifyContent: "space-between",
              }}
            >
              <div>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <div key={`inline-checkbox`}>
                    <Form.Check
                      type="checkbox"
                      id={`inline-checkbox`}
                      inline
                      label="I agree to the Terms and Conditions"
                      name="type"
                    />
                  </div>
                </Form.Group>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "end",
              }}
            >
              <Button
                variant="dark"
                type="submit"
                // style={{ paddingInline: "1rem" }}
                className="px-3"
              >
                Create account
              </Button>
            </div>
          </Form>{" "}
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
