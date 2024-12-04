import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./CSS/navBar.css";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ProductPage from "./pages/Product";
import ProductList from "./Dashboardpages/ProductList";
import Cart from "./components/Cart";
import Rings from "./components/Rings";
import Signin_up from "./components/Signin_up";
import DeliveryList from "./components/DeliveryList";
import Dashboard from "./Dashboardpages/Dashboard";
import ProdCreate from "./Dashboardpages/ProdCreate";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/Signin_up" element={<Signin_up isModal />} />
        <Route path="/Products" element={<ProductPage />} />
        <Route path="/Cart" element={<Cart isModal />} />
        <Route path="/Product-Create" element={<ProdCreate />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/DeliveryList" element={<DeliveryList />} />
        <Route path="/Rings" element={<Rings />} />
        <Route path="/ProductList" element={<ProductList />} />

        {/* AA */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
