import React from "react";
import Flush from "../../components/Accordion/Accordion";
import AboutUs from "../../components/About/AboutUs";

function AboutUsPage() {
  return (
    <>
    <h1 style={{paddingTop:'150px', textAlign:'center'}}>ABOUT US</h1>
        <Flush />
        <AboutUs/>

      {/* <span>
        Would you like to Donate?
        <a href="https://www.paypal.com/paypalme/wavyon8">Click Here!</a>
      </span> */}
    </>
  );
}

export default AboutUsPage;
