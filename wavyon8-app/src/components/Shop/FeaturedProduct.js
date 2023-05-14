import React, { useEffect, useState } from "react";
import products from "../../data/products";
import { useParams } from 'react-router-dom';
import Select from "../Select/Select";



function FeaturedProduct() {
  const { id } = useParams()
  const [product, setProduct] = useState(false);
  console.log(products)

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        // Find the product with the matching id
        const selectedProduct = products.find((product) => product.id === parseInt(id));
        console.log(selectedProduct)
        if (selectedProduct) {
          setProduct(selectedProduct);
        } else {
          throw new Error('Product not found');
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
    <>
    <div className="featured-left">
    <img src={product.photo} alt={product.title} />
    </div>
    <div className="featured-right">
      <div className="featured-column">
              <h2>{product.title}</h2>
      <p>{product.description}</p>
      <Select/>
      <p>Price: £{product.price}</p>
      </div>
    </div>

    </>
  );
}

export default FeaturedProduct;
