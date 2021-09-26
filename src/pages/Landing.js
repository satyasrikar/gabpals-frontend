import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardGroup,
  Col,
  Container,
  Form,
  FormControl,
  InputGroup,
  Row,
  Dropdown,
  Modal,
} from "react-bootstrap";
import CustomModal from "../components/CustomModal";
import LandingCarousel from "../components/LandingCarousel";

const Landing = () => {
  const [imageUrl, setImageUrl] = useState("https://picsum.photos/500");
  const [show, setShow] = useState(false);

  const [userData, setUserData] = useState([]);
  const fetchImage = () => {
    axios.get("https://randomuser.me/api/?results=12").then((res) => {
      setUserData(res.data.results);
      console.log(res.data.results);
    });
  };

  useEffect(() => {
    fetchImage();
  }, []);

  return (
    <div>
      <LandingCarousel />
      <Container class="py-2 text-center">
        <hr />
        <Row style={{ alignItems: "center" }}>
          <Col className="text-start">
            <h5>New Pals</h5>
          </Col>
          <Col className="text-end my-2">
            {/* <Button variant="light">Male</Button> */}
            {/* <Button variant="light">Male</Button> */}
            <Form>
              <Row className="align-content-center justify-content-end">
                <Col xs="auto">
                  <Form.Label
                    // className="me-sm-2"
                    htmlFor="inlineFormCustomSelect"
                    visuallyHidden
                  >
                    Preference
                  </Form.Label>
                  <Form.Select
                    // className="me-sm-2"
                    id="inlineFormCustomSelect"
                  >
                    <option value="0">Choose...</option>
                    <option value="1">Male</option>
                    <option value="2">Female</option>
                    <option value="3">Other</option>
                  </Form.Select>
                </Col>

                {/* <Col xs="auto">
                  <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                      Dropdown Button
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">
                        Another action
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">
                        Something else
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Col> */}
                <Col xs="auto">
                  <Form.Label htmlFor="inlineFormInputGroup" visuallyHidden>
                    Username
                  </Form.Label>
                  <InputGroup className="mb-2">
                    <InputGroup.Text>@</InputGroup.Text>
                    <FormControl
                      id="inlineFormInputGroup"
                      placeholder="Username"
                    />
                  </InputGroup>
                </Col>
                {/* <Col xs="auto">
                  <Form.Check
                    type="checkbox"
                    id="autoSizingCheck"
                    className="mb-2"
                    label="Remember me"
                  />
                </Col> */}
                <Col xs="auto">
                  <Button variant="dark" type="submit" className="mb-2">
                    Search
                  </Button>
                </Col>
                <Col xs="auto" className="align-items-center">
                  <Button variant="success">Around Me</Button>{" "}
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>

        <Row xs={1} sm={2} md={4} lg={6}>
          {userData.map((card, key) => (
            <Col>
              <div>
                <Card
                  onClick={() => setShow(true)}
                  style={{ cursor: "pointer" }}
                >
                  <Card.Img variant="top" src={card.picture.large} />
                </Card>

                <Row className="py-2">
                  <Col>
                    <div className="d-flex align-items-center justify-content-between">
                      <span>{card.name.first}</span>
                      <div className="d-flex align-items-center">
                        {card.gender === "male" ? (
                          <img src="images/man.png" width={20} />
                        ) : (
                          <img src="images/female.png" width={20} />
                        )}
                        {"      "}
                        <span>{card.dob.age} </span>
                      </div>
                    </div>
                  </Col>
                  <Modal
                    show={show}
                    onHide={() => setShow(false)}
                    className="modal-90w"
                    aria-labelledby="example-custom-modal-styling-title"
                  >
                    <Modal.Header closeButton>
                      <Modal.Title id="example-custom-modal-styling-title">
                        lorem{" "}
                      </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Aut nemo eaque similique dolores distinctio eius repellat
                      porro! Possimus blanditiis quo assumenda numquam illo
                      tenetur adipisci, ipsum officiis pariatur amet nihil.{" "}
                    </Modal.Body>
                  </Modal>
                </Row>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Landing;


  