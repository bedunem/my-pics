import React from "react";
import { Carousel } from "react-bootstrap";

import data from "./data";

const MyCarousel = () => {
  return (
    <Carousel data-interval="500" className="carousel slide ">
      <Carousel.Item className="carousel slide ">
        <img
          className=" carousel slide carousel-fade"
          src={data[0].image}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Dana's Art</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block " src={data[1].image} alt="Third slide" />
        <Carousel.Caption>
          <h3>Dana's Art</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block " src={data[2].image} alt="Third slide" />
        <Carousel.Caption>
          <h3>Dana's Art</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
export default MyCarousel;
