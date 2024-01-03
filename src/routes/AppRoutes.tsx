import { Route, Routes } from "react-router-dom";
import PageNotFound from "../pages/PageNotFound";
import Home from "../pages/Home";
import Product from "../pages/Product";
import OrderComplete from "../pages/OrderComplete";
import Checkout from "../pages/Checkout";
import Cart from "../pages/Cart";
import Favourites from "../pages/Favourites";
import Layout from "../components/Layout";
import Profile from "../pages/Profile";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/order-complete" element={<OrderComplete />} />
        <Route path="/profile" element={<Profile />} />
      </Route>
      {/* Invalid Routes */}
      <Route path={"*"} element={<PageNotFound />} />
    </Routes>
  );
}
