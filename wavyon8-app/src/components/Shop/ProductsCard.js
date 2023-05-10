import React from "react";
import { Card, Button, Form, Row, Col } from "react-bootstrap";
import { CartContext } from "../../context/CartContext";
import ProductContext from "../../context/ProductContext";
import { useContext } from "react";

function ProductsCard(props) {
  const cart = useContext(CartContext);
  const product = useContext(ProductContext);

  //const productQuantity = cart.getProductQuantity(product.id);
  console.log(cart.items);
  return (
    <Card>
      <Card.Body>
        <Card.Img src={product[0].photo} alt={product.title} />
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>£{product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ProductsCard;
