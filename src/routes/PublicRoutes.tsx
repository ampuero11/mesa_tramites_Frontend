import { Route, Routes } from "react-router-dom";
import LandingLayout from "../layouts/LandingLayout";
import Home from "../pages/Home";
import FormularioTramite from "../pages/FormularioTramite";

const PublicRoutes: React.FC = () => (
  <Routes>
    <Route path="/tramite" element={<FormularioTramite />} />
    <Route element={<LandingLayout />}>
      <Route path="/" element={<Home />} />
    </Route>
  </Routes>
);

export default PublicRoutes;
