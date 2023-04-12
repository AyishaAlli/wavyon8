import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Carousel.css";

import _001 from "../../images/carousel/001.jpg";
import _002 from "../../images/carousel/002.jpg";
import _003 from "../../images/carousel/003.jpg";
import _004 from "../../images/carousel/004.jpg";
import _005 from "../../images/carousel/005.jpg";
import _006 from "../../images/carousel/006.jpg";
import Carousel from "react-bootstrap/Carousel";

function Carousell() {
  return (
    <Carousel className="carousel">
      <Carousel.Item>
        <img className="d-block w-100" src={_003} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={_001} alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={_006} alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
}

export default Carousell;
