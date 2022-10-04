import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

function PrivateRouters() {
    const isAuth = true;

  return (
    
        isAuth ? <Outlet /> : <Navigate to="/login" />
    
  )
}

export default PrivateRouters