import React from "react";
import Context from "context/Context";
import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";

function PrivateRoutes() {
  const { auth } = useContext(Context);

  return auth.id ? <Outlet /> : <Navigate to={"/login"} />;
}

export default PrivateRoutes;
