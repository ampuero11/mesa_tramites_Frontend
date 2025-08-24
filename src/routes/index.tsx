import React from "react";
import { BrowserRouter } from "react-router-dom";
import PublicRoutes from "./PublicRoutes";
import AdminRoutes from "./AdminRoutes";

const AppRoutes: React.FC = () => (
  <BrowserRouter>
    <PublicRoutes />
    <AdminRoutes />
  </BrowserRouter>
);

export default AppRoutes;
