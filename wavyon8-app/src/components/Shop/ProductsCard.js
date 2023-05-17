import React from "react";

import "./ProductsCard.css";
import FeaturedProduct from "./FeaturedProduct";

import { Card, Button, Form, Row, Col } from "react-bootstrap";
import { CartContext } from "../../context/CartContext";
import ProductContext from "../../context/ProductContext";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";

function ProductsCard({ product }) {
  const cart = useContext(CartContext);

  return (
    <Link to={`/shop/${product.id}`}>
      <div className="product-body" key={product.id}>
        <img
          className="product-image"
          src={product.photo}
          alt={product.title}
          width={400}
          style={{ height: "350px" }}
        />
        <h2 className="product-title">{product.title}</h2>
        <p className="product-price">£{product.price}</p>
      </div>
    </Link>
  );
}

export default ProductsCard;
