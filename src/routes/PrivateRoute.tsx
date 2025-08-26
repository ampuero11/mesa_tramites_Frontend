import React, { type JSX } from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";

interface PrivateRouteProps {
  children: JSX.Element;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const access = useSelector((state: RootState) => state.auth.access);

  if (!access) {
    return <Navigate to="/admin" replace />;
  }
  return children;
};

export default PrivateRoute;
