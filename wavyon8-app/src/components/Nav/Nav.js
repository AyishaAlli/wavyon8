import React, { useEffect, useState, useContext } from "react";
import "./Nav.css";
import logo from "../../assets/images/logo_two.png";
import { NavLink } from "react-router-dom";
import { Modal } from "react-bootstrap";
import { CartContext } from "../../context/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCartShopping } from "@fortawesome/free-solid-svg-icons";

const bars = <FontAwesomeIcon icon={faBars} />;
const shoppingCart = <FontAwesomeIcon icon={faCartShopping} />;

function Nav() {
  const [show, setShow] = useState(false);
  const [showColor, handleShowColor] = useState(false); // nav background colour
  const [showNavbar, setShowNavbar] = useState(false); // responsive navbar
  const [showModal, setShowModal] = useState(false); // modal

  const { items, totalItems } = useContext(CartContext);

  const handleClose = () => setShow(false);
  const handleOpen = () => setShow(true);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  // scroll listener. 'when you scroll down, adds colour to navbar'
  // useEffect(() => {
  //   window.addEventListener("scroll", () => {
  //     if (window.scrollY > 10) {
  //       handleShowColor(true);
  //     } else {
  //       handleShowColor(false);
  //     }
  //   });

  //   return () => {
  //     window.removeEventListener("scroll", handleShowColor);
  //   };
  // }, []);

  return (
    <>
      <div className={`nav ${showColor && "navColor"}`}>
        <NavLink to="/">
          <img src={logo} width="80" alt="wavyon8 logo" />
        </NavLink>
        <div className="navAndShoppingCart">
          <div className="hamburger" onClick={handleShowNavbar}>
            {bars}
          </div>

          <div className={`navLinks ${showNavbar && "active"}`}>
            <ul>
              <li onClick={handleShowNavbar}>
                <NavLink to="/" className="navLink">
                  HOME
                </NavLink>
              </li>
              <li onClick={handleShowNavbar}>
                <NavLink to="/about" className="navLink">
                  ABOUT
                </NavLink>
              </li>
              <li onClick={handleShowNavbar} className="navLinkDropdown">
                <NavLink to="/events" className="navLink">
                  EVENTS
                </NavLink>
              </li>
              <li onClick={handleShowNavbar}>
                <NavLink to="/shop" className="navLink">
                  SHOP
                </NavLink>
              </li>
              <li onClick={handleShowNavbar}>
                <NavLink to="/contact" className="navLink">
                  CONTACT
                </NavLink>
              </li>
            </ul>
          </div>
          <button className="shoppingCartIcon" onClick={handleOpen}>
            {shoppingCart}
            {totalItems}
          </button>
        </div>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Your Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h1>This is the Modal bodayyyy</h1>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Nav;
