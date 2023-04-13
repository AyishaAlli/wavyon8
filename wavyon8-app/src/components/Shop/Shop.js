import React from 'react'
import {Row, Col} from 'react-bootstrap'
import { productsArray } from '../../products'
import ProductsCard from './ProductsCard'
import FeaturedProduct from './FeaturedProduct'

import './Shop.css'

function Shop() {
  return (
    <div className="shoppingContainer">
      <h1 className="shopTitle">Items</h1>
      <Row xs={1} md={3} className="g-4">
        {productsArray.map((product, id) => (
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