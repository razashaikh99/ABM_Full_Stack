import { motion } from "framer-motion";
import { FaTimes } from "react-icons/fa";
import { useCart } from "../../Hooks/useCart";
import CartItem from "./CartItem";
import { formatCurrency } from "../../Utils/formatCurrency";
import { useNavigate } from "react-router-dom";

const CartSidebar = ({ isOpen, onClose }) => {
    const { cartItems, totalPrice } = useCart();
    const navigate = useNavigate();

    return (
        <>
            {/* Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/40 z-40"
                    onClick={onClose}
                ></div>
            )}

            {/* Sidebar */}
            <motion.div
                initial={{ x: "100%" }}
                animate={{ x: isOpen ? 0 : "100%" }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="fixed right-0 top-0 w-full sm:w-[400px] h-full bg-white z-50 shadow-2xl flex flex-col"
            >
                {/* Header */}
                <div className="flex justify-between items-center p-4 border-b">
                    <h2 className="text-lg font-semibold text-gray-800">Shopping Cart</h2>
                    <button
                        onClick={onClose}
                        className="text-gray-600 hover:text-gray-900 transition"
                    >
                        <FaTimes size={20} />
                    </button>
                </div>

                {/* Cart Items */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                    {cartItems.length > 0 ? (
                        cartItems.map((item) => <CartItem key={item.id} item={item} />)
                    ) : (
                        <p className="text-center text-gray-500 mt-10">
                            Your cart is empty 🛒
                        </p>
                    )}
                </div>

                {/* Footer */}
                <div className="border-t p-4">
                    <div className="flex justify-between items-center mb-4">
                        <span className="font-semibold text-gray-700">Subtotal</span>
                        <span className="font-bold text-gray-900">
                            {formatCurrency(totalPrice)}
                        </span>
                    </div>

                    <button
                        onClick={() => {
                            onClose();
                            navigate("/checkout");
                        }}
                        disabled={cartItems.length === 0}
                        className={`w-full py-3 rounded-md font-medium text-white transition ${cartItems.length === 0
                                ? "bg-gray-400 cursor-not-allowed"
                                : "bg-secondary hover:bg-orange-500"
                            }`}
                    >
                        Proceed to Checkout
                    </button>
                </div>
            </motion.div>
        </>
    );
};

export default CartSidebar;
