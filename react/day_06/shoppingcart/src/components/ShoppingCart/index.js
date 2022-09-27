import React, { useReducer } from 'react'

import "./shoppingcart.css"
import ListProduct from './ListProduct'
import BuildInfomation from './BuildInfomation'
const ShoppingCart = () => {
  return (
    <div>
        <div className="shopping-cart-container mt-5">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="mb-4">
                        <h2>Shopping Cart</h2>
                    </div>
                </div>
            </div>

            
            <div className="row shopping-cart">
                <div className="col-md-8">
                    <ListProduct/>
                </div>
                <div className="col-md-4">
                    <BuildInfomation />
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default ShoppingCart