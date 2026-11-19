import MainLayout from "./Components/MainLayout/index";
import AuthLayout from "./Components/AuthLayout/index";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/index";
import Shop from "./Pages/Shop/index";
import ProductDetails from "./Pages/ProductDetails/index";
import Checkout from "./Pages/Checkout/index";
import OrderConfirmation from "./Pages/OrderConfirmation/index";
import ContactUs from "./Pages/ContactUs/index";
import AboutUs from "./Pages/AboutUs/index";
import ReturnRefundPolicy from "./Pages/ReturnRefundPolicy/index";
import Auth from "./Pages/Auth/index";
import ForgotPasswordForm from "./Components/ForgotPasswordForm/index";
import RegisterForm from "./Components/RegisterForm/index";
import LoginForm from "./Components/LoginForm/index";
import PageNotFound from "./Pages/PageNotFound/index";

const AppRouter = () => {
    return (
        <Routes>
            <Route element={<MainLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/product/:id" element={<ProductDetails />} />

                <Route path="/checkout" element={<Checkout />} />
                <Route path="/order-confirmation" element={<OrderConfirmation />} />

                <Route path="/contact" element={<ContactUs />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/return-policy" element={<ReturnRefundPolicy />} />
            </Route>
            <Route element={<AuthLayout />}>
                <Route path="/auth" element={<Auth />} />
                <Route path="/login" element={<LoginForm />} />
                <Route path="/register" element={<RegisterForm />} />
                <Route path="/forgot" element={<ForgotPasswordForm />} />
            </Route>
            <Route element={<MainLayout />}>
                <Route path="*" element={<PageNotFound />} />
            </Route>
        </Routes>
    );
};

export default AppRouter;
