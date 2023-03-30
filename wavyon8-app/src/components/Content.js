import "./Content.css";
import React from "react";

import carnival from "../images/homepage/carnival.png";

function Content() {


  return (
    <>
    <div className="introduction">
      <p>A Collective of individuals lorem ipsum etc  las who love to rollerskate and all them things deya. We offer events, clothing, lessons the lot. writing this cus im bored and need a text filler. need to figure out what is actually going to go hear</p>
      <button>See More</button>
    </div>
    <div className="articles">
    <figure>
        <img
          src={carnival}
          alt="girls in carnival attire" width={350}
        />
        <figcaption><p>Their carnival may have been cancelled this year, and the rainy weather and cloudy skies failed to impress,</p><a href="https://www.inyourarea.co.uk/news/south-london-roller-skaters-enjoy-festival-spirit-despite-cancelled-carnival/">Read More</a></figcaption>
      </figure>
    </div>
    </>
  );
}

export default Content;
