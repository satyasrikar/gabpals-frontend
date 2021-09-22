import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card, CardGroup, Col, Container, Row } from "react-bootstrap";
import LandingCarousel from "../components/LandingCarousel";

const Landing = () => {
  const [imageUrl, setImageUrl] = useState("https://picsum.photos/500");
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

      <Container class="py-5 text-center">
        <hr />
        <Row xs={1} sm={2} md={4} lg={6}>
          {userData.map((card, key) => (
            <Col>
              <Card>
                <Card.Img variant="top" className="" src={card.picture.large} />
              </Card>
              <Row>
                <Col>
                  <div className="d-flex align-items-center justify-content-between">
                    <h5>{card.name.first}</h5>
                    <div className="d-flex align-items-center">
                      {card.gender === "male" ? (
                        <img src="images/man.png" width={20} />
                      ) : (
                        <img src="images/female.png" width={20} />
                      )}
                      {"      "}
                      <h6>{card.dob.age} </h6>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Landing;
