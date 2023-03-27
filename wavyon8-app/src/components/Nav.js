import React, { useEffect, useState } from "react";
import "./Nav.css";
import logo from "../images/logo_one.png";
import { NavLink } from "react-router-dom";

import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";


const barsIcon = <FontAwesomeIcon icon={faBars} />

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

      <div className="navLinks">
        <li>
          <NavLink to="/" className="navLink">
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className="navLink">
            ABOUT
          </NavLink>
        </li>

        <li className="navLinkDropdown">
          <NavLink to="/events" className="navLink">
            Events
          </NavLink>
        </li>
        <div className="navLink-dd-content">
          <NavLink to="/upcomingevents" className="navLink">
            Upcoming Events
          </NavLink>
          <NavLink to="/lessons" className="navLink">
            Rollerskating Lessons
          </NavLink>
          <NavLink to="/gallery" className="navLink">
            Gallery
          </NavLink>
        </div>
        <li>
          <NavLink to="/shop" className="navLink">
            Shop
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className="navLink">
            Contact
          </NavLink>
        </li>
      </div>
      <div>BARS</div>
    </div>
  );
}

export default Nav;
