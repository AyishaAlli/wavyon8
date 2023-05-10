import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Partnerships.css";
import partnerships from '../../data/partnerships'



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

  return (
    <div className="content">
      <Slider {...sliderSettings} className="slider">
        {partnerships.map((card, index) => (
          <div key={index}>
            <img alt={card.alt} src={card.imageSrc} width="70" height="70" />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Sponsors;
