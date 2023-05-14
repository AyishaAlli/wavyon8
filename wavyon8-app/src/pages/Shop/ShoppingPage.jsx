import React from "react";
import { Row, Col } from "react-bootstrap";
import products from "../../data/products";
import ProductsCard from "../../components/Shop/ProductsCard";
import FeaturedProduct from "../../components/Shop/FeaturedProduct";
import './ShoppingPage.css'

function ShoppingPage() {
  return (
    <div className="shoppingContainer">
      <h1 className="shopTitle">ITEMS</h1>

      <Row xs={1} md={3} className="g-4">
        {products.map((product, id) => (
          <Col align="center" key={id}>
            <ProductsCard product={product} />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default ShoppingPage;
