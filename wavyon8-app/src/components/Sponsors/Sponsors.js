import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Sponsors.css";

import ellesse from "../../images/sponsors-logos/ellesse.png";
import jbl from "../../images/sponsors-logos/jbl.png";
import lucozade from "../../images/sponsors-logos/lucozade.png";
import redBull from "../../images/sponsors-logos/red-bull.png";
import wray from "../../images/sponsors-logos/wray-and-nephew.png";
import zara from "../../images/sponsors-logos/zara.png";

function Sponsors() {
  const sliderSettings = {
    slidesToShow: 5,
    //slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 8000,
    arrows: false,
    dots: false,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 520,
        settings: {
          speed: 5000,
          slidesToShow: 3,
        },
      },
    ],
  };

  const sponsors = [
    {
      imageSrc: ellesse,
      alt: "sponsor logo",
    },
    {
      imageSrc: jbl,
      alt: "sponsor logo",
    },
    {
      imageSrc: lucozade,
      alt: "sponsor logo",
    },
    {
      imageSrc: redBull,
      alt: "sponsor logo",
    },
    {
      imageSrc: wray,
      alt: "sponsor logo",
    },
    {
      imageSrc: zara,
      alt: "sponsor logo",
    },
  ];
  return (
    <div className="content">
      <Slider {...sliderSettings} className="slider">
        {sponsors.map((card, index) => (
          <div key={index}>
            <img alt={card.alt} src={card.imageSrc} width="70" height="70" />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Sponsors;
