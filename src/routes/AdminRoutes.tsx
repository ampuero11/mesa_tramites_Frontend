import { Route, Routes } from "react-router-dom";
import AdminLayout from "../layouts/AdminLayout";
import Login from "../pages/admin/Login";
import Dashboard from "../pages/admin/Dashboard";
import TramitesList from "../pages/admin/TramitesList";
import TramiteDetail from "../pages/admin/TramiteDetail";
import Actas from "../pages/admin/Actas";

const AdminRoutes: React.FC = () => (
  <Routes>
    <Route path="/admin/login" element={<Login />} />
    <Route element={<AdminLayout />}>
      <Route path="/admin/dashboard" element={<Dashboard />} />
      <Route path="/admin/tramites" element={<TramitesList />} />
      <Route path="/admin/tramites/:id" element={<TramiteDetail />} />
      <Route path="/admin/actas/list" element={<Actas />} />
    </Route>
  </Routes>
);

export default AdminRoutes;
