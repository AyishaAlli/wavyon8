import React from "react";
import "./Footer.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const twitter = <FontAwesomeIcon icon={faTwitter} />;
const instagram = <FontAwesomeIcon icon={faInstagram} />;
const youtube = <FontAwesomeIcon icon={faYoutube} />;

export const Footer = () => {
  return (
    <div className="cc">
      <div className="footerContainer">
        <h2>WAVYON8.COM</h2>
        <ul className="footerLinks">
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
        <p className="copyRightText">&copy;2022 Wavyon8 LTD</p>
      </div>
    </div>
  );
};

export default Footer;
