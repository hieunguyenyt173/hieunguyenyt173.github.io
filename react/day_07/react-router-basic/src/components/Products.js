import React from "react";
import {Outlet} from "react-router-dom"
function Products() {
  return (
  <>
  <h1>Products Page</h1>
  <Outlet />
  </>
  )
}

export default Products;
