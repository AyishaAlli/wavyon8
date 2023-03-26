import "./Content.css";
import React from "react";

function Content() {
  return (
    <div className="content-one">
      <div class="sec-one">
        <div class="secTwoLeft leftAndRight">
          <div class="contentContainer">
            <h2 class="secTwoTitle">Transform your brand</h2>
            <p class="secTwoText">
              We are a full-service creative agency specializing in helping
              brands grow fast. Engage your clients through compelling visuals
              that do most of the marketing for you.
            </p>
            <button class="secTwoBtn">LEARN MORE</button>
          </div>
        </div>
        <div class="secTwoRight leftAndRight"></div>
      </div>
    </div>
  );
}

export default Content;
