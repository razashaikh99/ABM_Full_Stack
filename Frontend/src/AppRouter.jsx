// src/router.jsx
import { Routes, Route } from "react-router-dom";

// ✅ Pages Import
import Home from "./Pages/Home";
import Shop from "./Pages/Shop";
import ProductDetails from "./Pages/ProductDetails";
import Checkout from "./Pages/Checkout";
import OrderConfirmation from "./Pages/OrderConfirmation";
import ContactUs from "./Pages/ContactUs";
import AboutUs from "./Pages/AboutUs";
import ReturnRefundPolicy from "./Pages/ReturnRefundPolicy";
import Auth from "./Pages/Auth";
import ForgotPasswordForm from "./Components/Auth/ForgotPasswordForm";
import RegisterForm from "./Components/Auth/RegisterForm";
import LoginForm from "./Components/Auth/LoginForm";
import PageNotFound from "./Pages/PageNotFound";

const AppRouter = () => {
  return (
    <Routes>
      {/* Main Pages */}
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/product/:id" element={<ProductDetails />} />

      {/* Checkout Flow */}
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/order-confirmation" element={<OrderConfirmation />} />

      {/* Info Pages */}
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/return-policy" element={<ReturnRefundPolicy />} />

      {/* Authentication */}
      <Route path="/auth" element={<Auth />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/register" element={<RegisterForm />} />
      <Route path="/forgot" element={<ForgotPasswordForm />} />

      {/* Page Not Found */}
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default AppRouter;
