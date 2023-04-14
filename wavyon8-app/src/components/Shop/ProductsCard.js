import React from "react";
import { Card, Button, Form, Row, Col } from "react-bootstrap";
import { CartContext } from "../../CartContext";
import { useContext } from "react";

function ProductsCard(props) {
  const product = props.product;
  const cart = useContext(CartContext);
  const productQuantity = cart.getProductQuantity(product.id);
  console.log(cart.items);
  return (
    <Card>
      <Card.Body>
        <Card.Img src={product.photo} alt={product.title}/>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>£{product.price}</Card.Text>
        <Button variant="primary">More Info</Button>
        <Button variant="primary" onClick={() => cart.addOneToCart(product.id)}>
          Add To Cart
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ProductsCard;
