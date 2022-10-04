import React from 'react'
import {useParams} from "react-router-dom"
function OrderDetail() {
    const { orderId } = useParams();
  return (
    <div>
        <h1>Order Detail : ID = - {orderId}</h1>
    </div>
  )
}

export default OrderDetail