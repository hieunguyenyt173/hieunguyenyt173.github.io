import React from 'react'
import {Outlet} from 'react-router-dom'
function RouteStydy() {
  return (
    <div> 
      <h1>Lộ trình</h1>
      <Outlet />

    </div>
  )
}

export default RouteStydy