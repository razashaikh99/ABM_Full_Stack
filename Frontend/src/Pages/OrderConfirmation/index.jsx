import { orderConfirmationConfig } from "../../config/index";
import useOrderConfirmationPage from "./index.function";
import { Link } from "react-router-dom";

import { FaCheckCircle } from "react-icons/fa";
import { formatCurrency } from "../../Utils/formatCurrency";

const OrderConfirmation = () => {
    const {
        order,
        total
    } = useOrderConfirmationPage();

    const { heading } = orderConfirmationConfig;

    if (!order) {
        return (
            <div className="max-w-7xl mx-auto px-4 py-20 text-center">
                <h1 className="text-3xl font-bold text-primary mb-4">No order found</h1>

                <Link to="/shop" className="text-secondary underline">Continue shopping</Link>
            </div>
        );
    }

    const { items } = order;

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-10">
            <div className="bg-white shadow-lg rounded-2xl p-8 max-w-lg w-full text-center">

                <div className="flex justify-center mb-6">
                    <FaCheckCircle className="text-green-500 text-6xl" />
                </div>

                <h1 className="text-3xl font-bold text-primary mb-2">
                    {heading}
                </h1>

                <p className="text-gray-600 mb-6">
                    Your order has been successfully placed. You’ll receive a confirmation
                    email shortly with your order details.
                </p>

                <div className="bg-gray-100 rounded-xl p-5 text-left mb-6">
                    <h2 className="font-semibold text-lg mb-3">Order Summary</h2>

                    <ul className="space-y-2 text-gray-700">
                        {items.map(item => (
                            <li key={item.id} className="flex justify-between">
                                <span>{item.name}{item.quantity > 1 && ` (x${item.quantity})`}</span>

                                <span>{formatCurrency(item.price * item.quantity)}</span>
                            </li>
                        ))}
                        <li className="flex justify-between font-semibold border-t pt-2">
                            <span>Total</span>

                            <span>{total}</span>
                        </li>
                    </ul>
                </div>

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
