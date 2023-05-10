import React, { useContext }  from 'react'
import {Row, Col} from 'react-bootstrap'
import { products } from '../../data/products'
import ProductsCard from './ProductsCard'
import FeaturedProduct from './FeaturedProduct'
import ProductContext from '../../context/ProductContext'

import './Shop.css'


function Shop() {
  const products = useContext(ProductContext);
  return (
    <div className="shoppingContainer">
      <h1 className="shopTitle">Items</h1>
      <Row xs={1} md={3} className="g-4">
        {products.map((product, id) => (
          <Col align="center" key={id}>
            <ProductsCard product={product}/>
          </Col>
        ))}
      </Row>
      <FeaturedProduct/>
    </div>
  )
}

export default Shop
