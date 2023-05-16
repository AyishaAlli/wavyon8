import React, { useEffect, useState } from "react";
import products from "../../data/products";
import { Link, useParams } from "react-router-dom";
import Select from "../Select/Select";

import "./FeaturedProducts.css";

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
    <Link to={'/shop'}>Back to Products</Link>
      <div className="featured-section-content">
        <div className="featured-left">
          <img
            className="feature-image"
            src={product.photo}
            alt={product.title}
          />
        </div>
        <div className="featured-right">
          <div className="featured-info">
            <h2 className="right-title">{product.title}</h2>
            <p>{product.description}</p>
            <Select />
            <Select />

            <p>Price: £{product.price}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedProduct;
