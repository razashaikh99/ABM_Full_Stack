// src/Pages/OrderConfirmation.jsx
import React from "react";
import { Link } from "react-router-dom";
// import { CheckCircle } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";

const OrderConfirmation = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-10">
            <div className="bg-white shadow-lg rounded-2xl p-8 max-w-lg w-full text-center">
                {/* Success Icon */}
                <div className="flex justify-center mb-6">
                    <FaCheckCircle className="text-green-500 text-6xl" />
                </div>

                {/* Message */}
                <h1 className="text-3xl font-bold text-primary mb-2">
                    Thank You for Your Order!
                </h1>
                <p className="text-gray-600 mb-6">
                    Your order has been successfully placed. You’ll receive a confirmation
                    email shortly with your order details.
                </p>

                {/* Order Summary (Static Example) */}
                <div className="bg-gray-100 rounded-xl p-5 text-left mb-6">
                    <h2 className="font-semibold text-lg mb-3">Order Summary</h2>
                    <ul className="space-y-2 text-gray-700">
                        <li className="flex justify-between">
                            <span>Non-Stick Fry Pan</span>
                            <span>₨ 2,500</span>
                        </li>
                        <li className="flex justify-between">
                            <span>Steel Spoon Set (x2)</span>
                            <span>₨ 2,400</span>
                        </li>
                        <li className="flex justify-between font-semibold border-t pt-2">
                            <span>Total</span>
                            <span>₨ 4,900</span>
                        </li>
                    </ul>
                </div>

                {/* Continue Shopping Button */}
                <Link
                    to="/shop"
                    className="inline-block bg-secondary hover:bg-orange-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300"
                >
                    Continue Shopping
                </Link>
            </div>
        </div>
    );
};

export default OrderConfirmation;
