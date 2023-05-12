import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Carousel.css";
import articles from "../../data/Carousel";

import Carousel from "react-bootstrap/Carousel";

import slide_one from "../../assets/images/carousel/001.jpg";

function Carousell() {
  return (
    <Carousel className="carousel">
      {articles.map((article, i) => (
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={article.imageSrc}
            alt="Image slide"
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default Carousell;

