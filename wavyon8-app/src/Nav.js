import React, { useEffect, useState } from "react";
import "./Nav.css";
import logo from "./images/logo_one.png";
import { NavLink } from 'react-router-dom'

import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-solid-svg-icons";

//const instagramIcon = <FontAwesomeIcon icon={faInstagram} />

function Nav() {
  const [show, handleShow] = useState(false);
  

  // scroll listener. 'when you scroll down, add border'
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });

   
    return () => {
      window.removeEventListener("scroll", handleShow);
    };
  }, []);

  return (
    <div className={`nav ${show && "navColor"}`}>
      <img src={logo} width="80" alt="wavyon8 logo" />

        {/* <ul className="navLinks">
          <li>
          <NavLink to="/">Home</NavLink>
          </li>
          <li>
          <NavLink to="/about">About</NavLink>
          </li>

          <li className="navLinkDropdown">
          <NavLink to="/events">Events</NavLink>
          </li>
          <div className="navLink-dd-content">
            <NavLink to="/upcomingevents">Upcoming Events</NavLink>
            <NavLink to="/lessons">Rollerskating Lessons</NavLink>
            <NavLink to="/gallery">Gallery</NavLink>
          </div>
          <li>
            <a>SHOP</a>
          </li>
          <li>
          <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul> */}

    </div>
  );
}

export default Nav;
