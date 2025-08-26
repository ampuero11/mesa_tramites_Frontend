import { Route, Routes } from "react-router-dom";
import LandingLayout from "../layouts/LandingLayout";
import Home from "../pages/Home";
import FormularioTramite from "../pages/FormularioTramite";
import SearchPublic from "../pages/Search";

const PublicRoutes: React.FC = () => (
  <Routes>
    <Route path="/tramite" element={<FormularioTramite />} />
    <Route path="/search" element={<SearchPublic />} />
    <Route element={<LandingLayout />}>
      <Route path="/" element={<Home />} />
    </Route>
  </Routes>
);

export default PublicRoutes;
