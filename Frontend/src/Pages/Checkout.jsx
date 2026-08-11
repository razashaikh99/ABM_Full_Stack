// src/Pages/Checkout.jsx
import React, { useState } from "react";
import BillingForm from "../Components/Checkout/BillingForm";
import OrderSummary from "../Components/Checkout/OrderSummary";
import { toast } from "react-toastify";

const Checkout = () => {
    const [cartItems, setCartItems] = useState([
        {
            id: "1",
            name: "Non-Stick Fry Pan",
            price: 2500,
            quantity: 1,
            image: "/ProductsImages/cookware/frypan.jpg",
        },
        {
            id: "2",
            name: "Steel Spoon Set",
            price: 1200,
            quantity: 2,
            image: "/ProductsImages/drinkware/spoonset.jpg",
        },
    ]);

    const handlePlaceOrder = () => {
        toast.success("✅ Order Placed Successfully!");
    };

    return (
        <div className="max-w-7xl mx-auto px-4 py-10">
            {/* Page Title */}
            <h1 className="text-3xl font-bold text-primary mb-8 text-center">
                Checkout
            </h1>

            {/* Checkout Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                {/* Left - Billing Form */}
                <div className="lg:col-span-2 bg-white p-6 rounded-2xl shadow-md">
                    <h2 className="text-xl font-semibold mb-4 text-gray-800">
                        Billing Information
                    </h2>
                    <BillingForm />
                </div>

                {/* Right - Order Summary */}
                <div className="bg-white p-6 rounded-2xl shadow-md h-fit">
                    <h2 className="text-xl font-semibold mb-4 text-gray-800">
                        Order Summary
                    </h2>
                    <OrderSummary cartItems={cartItems} onPlaceOrder={handlePlaceOrder} />
                </div>
            </div>
        </div>
    );
};

export default Checkout;
