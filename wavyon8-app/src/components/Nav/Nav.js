import React, { useEffect, useState } from "react";
import "./Nav.css";
import logo from "../../images/logo_one.png";
import { NavLink } from "react-router-dom";

import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCartShopping } from "@fortawesome/free-solid-svg-icons";

const bars = <FontAwesomeIcon icon={faBars} />;
const shoppingCart = <FontAwesomeIcon icon={faCartShopping} />;

function Nav() {
  const [show, handleShow] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }
  // scroll listener. 'when you scroll down, add border'
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 10) {
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
      <div className="hamburger" onClick={handleShowNavbar}>
          {bars}
        </div>

      <div className={`navLinks ${showNavbar && 'active'}`}>
        <ul>
          <li onClick={handleShowNavbar}><NavLink to="/" className="navLink">HOME</NavLink></li>
          <li onClick={handleShowNavbar}><NavLink to="/about" className="navLink">ABOUT</NavLink></li>
          <li onClick={handleShowNavbar} className="navLinkDropdown"><NavLink to="/events" className="navLink">EVENTS</NavLink></li>
          {/* <div className="navLink-dd-content">
            <NavLink to="/upcomingevents" className="navLink">
              UPCOMING EVENTS
            </NavLink>
            <NavLink to="/lessons" className="navLink">
              LESSONS
            </NavLink>
            <NavLink to="/gallery" className="navLink">
              GALLERY
            </NavLink>
          </div> */}
          <li onClick={handleShowNavbar}><NavLink to="/shop" className="navLink">SHOP</NavLink></li>
          <li onClick={handleShowNavbar}><NavLink to="/contact" className="navLink">CONTACT</NavLink></li>
        </ul> 
      </div>
    </div>
  );
}

export default Nav;
