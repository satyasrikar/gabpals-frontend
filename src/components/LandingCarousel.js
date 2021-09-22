import React from "react";
import { Carousel } from "react-bootstrap";

const LandingCarousel = () => {
  return (
    <Carousel variant="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/gabpals-carousel.png"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>Welcome to Gabpals!</h5>
          <p>Find and make friends across countries!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/gabpals-carousel.png"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Special Halloween offer at Gabpals</h5>
          <p>
            Top up your gabpals wallet with coupon 'HALLOWEEN' with get 10%
            extra coins off your purchase!
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/gabpals-carousel.png"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Meeting new people has not been easier!</h5>
          <p>
            With our ever growing network of 125,000+ people worldwide, never
            feel left out again!
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default LandingCarousel;
