import React from "react";
import { Row, Col } from "react-bootstrap";
import { productsArray } from "../../products";

import ProductCard from './ProductCard'
import "./Shop.css";

function Shop() {
  return (
    <div className="shoppingContainer">
      <h1 className="shopTitle">Items</h1>
      <Row xs={1} md={3} className="g-4">
        {productsArray.map((product, id) => (
          <Col align="center" key={id}>
            <ProductCard product={product}/>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Shop;
