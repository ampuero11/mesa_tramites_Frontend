import { Route, Routes } from "react-router-dom";
import AdminLayout from "../layouts/AdminLayout";
import Login from "../pages/admin/Login";
import Dashboard from "../pages/admin/Dashboard";
import TramitesList from "../pages/admin/TramitesList";
import TramiteDetail from "../pages/admin/TramiteDetail";
import Actas from "../pages/admin/Actas";
import TramiteSearch from "../pages/admin/TramiteSearch";
import PrivateRoute from "./PrivateRoute";

const AdminRoutes: React.FC = () => (
  <Routes>
    <Route path="/admin" element={<Login />} />

    <Route
      element={
        <PrivateRoute>
          <AdminLayout />
        </PrivateRoute>
      }
    >
      <Route path="/admin/dashboard" element={<Dashboard />} />
      <Route path="/admin/tramites" element={<TramitesList />} />
      <Route path="/admin/tramites/:id" element={<TramiteDetail />} />
      <Route path="/admin/actas/list" element={<Actas />} />
      <Route path="/admin/buscar" element={<TramiteSearch />} />
    </Route>
  </Routes>
);

export default AdminRoutes;
