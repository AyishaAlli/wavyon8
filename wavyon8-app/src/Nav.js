import React, { useEffect, useState } from "react";
import "./Nav.css";
import logo from "./images/logo_one.png";

import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-solid-svg-icons'

//const instagramIcon = <FontAwesomeIcon icon={faInstagram} />

function Nav() {
  return (
    <div className={`nav`}>
      <img src={logo} width="80" alt="wavyon8 logo" />
      <ul className="links">
        <li>
          <a>HOME</a>
        </li>
        <li>
          <a>ABOUT US</a>
        </li>
        <li>
          <a>EVENTS</a>
        </li>
        <li>
          <a>SHOP</a>
        </li>
        <li>
          <a>GALLERY</a>
        </li>
      </ul>
    </div>
  );
}

export default Nav;