import React from "react";
import ProductCard from "../components/Shop/FeaturedProduct";


const FeatureProductPage = () => {
  const product = {
    id: 1,
    name: 'Example Product',
    description: 'This is an example product',
    price: 19.99,
    imageUrl: 'https://example.com/product-image.jpg',
    // ... other product details
  };

  return (
    <div>
      <h1>{product.name}</h1>
      <img src={product.imageUrl} alt={product.name} />
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <button>Add to Cart</button>
    </div>
  );
};

export default FeatureProductPage;
