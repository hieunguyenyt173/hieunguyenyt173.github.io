import React from 'react'
import {Link} from "react-router-dom"
function Orders() {
  const orders = [
    {
      id: 1, name: "Sản phẩm 1",
    },
    {
      id: 2, name: "Sản phẩm 2"
    },
    {
      id: 3, name: "Sản phẩm 3"
    }
  ]
  return (
    <>
    <h1>Orders Page</h1>
    {orders.map(order => (
      <Link to={`/orders/${order.id}`} key={order.id} className="d-block">{order.name}</Link>
    ))}
    </>
    
  )
}

export default Orders