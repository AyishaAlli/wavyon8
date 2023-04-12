import React from "react";
import Flush from "../components/Accordion/Accordion";
import AboutUs from "../components/About/AboutUs";

function AboutUsPage() {
  return (
    <div>
      <div>
        <Flush />
        <AboutUs/>
      </div>
      {/* <span>
        Would you like to Donate?
        <a href="https://www.paypal.com/paypalme/wavyon8">Click Here!</a>
      </span> */}
    </div>
  );
}

export default AboutUsPage;
