import React from "react";

import FeaturedProduct from "./FeaturedProduct";

import { Card, Button, Form, Row, Col } from "react-bootstrap";
import { CartContext } from "../../context/CartContext";
import ProductContext from "../../context/ProductContext";
import { useContext , useState } from "react";
import { Link } from "react-router-dom";

function ProductsCard({ product }) {
  const cart = useContext(CartContext);

  return (
    <Link to={`/shop/${product.id}`}>
    <Card>
      <Card.Body key={product.id} >
        <Card.Img src={product.photo} alt={product.title} width={100} height={250}/>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>£{product.price}</Card.Text>
      </Card.Body>
    </Card>
    </Link>
  );
}

export default ProductsCard;
