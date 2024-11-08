import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import RestaurantPage from "./pages/Restaurant";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/restaurantes/:id" element={<RestaurantPage />} />
  </Routes>
);

export default AppRoutes;
