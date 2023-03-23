import React from "react";
import "./Footer.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";

const twitter = <FontAwesomeIcon icon={faTwitter} />;
const instagram = <FontAwesomeIcon icon={faInstagram} />;
const youtube = <FontAwesomeIcon icon={faYoutube} />;

export const Footer = () => {
  return (
    <div className="container">
      <h2>WAVYON8.COM</h2>
      <ul className="links">
        <li>
          <a>Home</a>
        </li>
        <li>
          <a>Gallery</a>
        </li>
        <li>
          <a>About</a>
        </li>
        <li>
          <a>Contact</a>
        </li>
      </ul>
      <div className="line"></div>
      <div className="socialMediaIcons">
        <a>{twitter}</a>
        <a>{instagram}</a>
        <a>{youtube}</a>
      </div>
      <br />
      <br />
      <br />
      <p>&copy;2022 Wavyon8 LTD</p>
    </div>
  );
};

export default Footer;
