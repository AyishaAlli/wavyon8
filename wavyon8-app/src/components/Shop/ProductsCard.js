import React from "react";

import './ProductsCard.css'
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
     <div style={{maxWidth:'500px'}}>
    <Card >
      <Card.Body className="card-body" key={product.id} >
        <Card.Img className="card-image" src={product.photo} alt={product.title} width={50} style={{height:'250px'}}/>
        <Card.Title className="card-title">{product.title}</Card.Title>
        <Card.Text className="card-text" >£{product.price}</Card.Text>
      </Card.Body>
    </Card></div> 
    </Link>
  );
}

export default ProductsCard;
