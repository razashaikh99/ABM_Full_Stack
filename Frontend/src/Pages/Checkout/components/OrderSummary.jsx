import { checkoutSettings } from "../../../config/index";

const OrderSummary = ({ cartItems, subtotal, shipping, total, onPlaceOrder }) => {

    return (
        <div className="w-full max-w-md mx-auto bg-white rounded-xl shadow-md p-6 mt-6 md:mt-0">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                Order Summary
            </h2>

            <div className="divide-y divide-gray-200 mb-4">
                {cartItems.length > 0 ? (
                    cartItems.map((item) => (
                        <div
                            key={item.id}
                            className="flex items-center justify-between py-3"
                        >
                            <div className="flex items-center space-x-3">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-14 h-14 rounded-md object-cover"
                                />
                                <div>
                                    <h4 className="font-medium text-gray-800">{item.name}</h4>
                                    <p className="text-sm text-gray-500">
                                        Qty: {item.quantity}
                                    </p>
                                </div>
                            </div>
                            <span className="text-gray-800 font-semibold">
                                Rs. {(item.price * item.quantity).toLocaleString()}
                            </span>
                        </div>
                    ))
                ) : (
                    <p className="text-gray-500 text-center py-4">
                        Your cart is empty.
                    </p>
                )}
            </div>

            <div className="space-y-2 text-gray-700 border-t border-gray-200 pt-4">
                <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span className="font-medium">Rs. {subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                    <span>Shipping</span>
                    <span className="font-medium">
                        {shipping > 0 ? `Rs. ${shipping}` : "Free"}
                    </span>
                </div>
                <div className="flex justify-between text-lg font-semibold text-gray-900 border-t border-gray-200 pt-2">
                    <span>Total</span>
                    <span>Rs. {total.toLocaleString()}</span>
                </div>
            </div>

            <button
                type="button"
                disabled
                onClick={onPlaceOrder}
                className="w-full mt-6 bg-gray-400 text-white font-semibold py-2 rounded-lg cursor-not-allowed"
            >
                Place Order
            </button>

            <p className="mt-3 text-sm text-gray-600" role="status">{checkoutSettings.unavailableMessage}</p>
        </div>
    );
};

export default OrderSummary;
