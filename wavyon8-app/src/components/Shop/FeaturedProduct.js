import React, { useEffect, useState } from "react";
import products from "../../data/products";
import { Link, useParams } from "react-router-dom";
import Select from "../../components/Select/Select";

import "./FeaturedProducts.css";
import { Button } from "react-bootstrap";

function FeaturedProduct() {
  const { id } = useParams();
  const [product, setProduct] = useState(false);
  console.log(products);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        // Find the product with the matching id
        const selectedProduct = products.find(
          (product) => product.id === parseInt(id)
        );
        console.log(selectedProduct);
        if (selectedProduct) {
          setProduct(selectedProduct);
        } else {
          throw new Error("Product not found");
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchProductDetails();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="featured-section-container">
      <Link to={"/shop"}>Back to Products</Link>
      <div className="featured-section-content">
        <div className="featured-left">
          <img
            className="featured-image"
            src={product.photo}
            alt={product.title}
          />
        </div>
        <div className="featured-right featured-info">
          <h2 className="featured-item-title">{product.title}</h2>
          <p className="featured-item-price">£{product.price}</p>
          <Select
            className="logo-colour-select"
            name="logoColour"
            placeholder="E.g Pink"
            label="Logo Colour"
            required
          />

          <Select name="size" placeholder="E.g Small" label="Size" required />

          <button className="addToCart">ADD TO CART</button>
        </div>
      </div>
    </div>
  );
}

export default FeaturedProduct;
