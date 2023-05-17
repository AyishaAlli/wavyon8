import React from "react";
import { Row, Col } from "react-bootstrap";
import products from "../../data/products";
import ProductsCard from "../../components/Shop/ProductsCard";
import FeaturedProduct from "../../components/Shop/FeaturedProduct";
import './ShoppingPage.css'

function ShoppingPage() {
  return (
    <div className="shoppingContainer">
      <h1 className="shopTitle title">RANGE</h1>
      <div className="productsContainer">
        {products.map((product, id) => (
          <div align="center" key={id}>
            <ProductsCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShoppingPage;
