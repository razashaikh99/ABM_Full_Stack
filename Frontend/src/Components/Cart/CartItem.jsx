import React from "react";

const CartItem = ({ item, onRemove, onQuantityChange }) => {
    return (
        <div className="flex items-center justify-between border-b py-4">
            {/* Product Info */}
            <div className="flex items-center gap-4">
                <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-lg"
                />
                <div>
                    <h3 className="font-semibold text-gray-800">{item.name}</h3>
                    <p className="text-gray-500 text-sm">${item.price.toFixed(2)}</p>
                </div>
            </div>

            {/* Quantity Controls */}
            <div className="flex items-center gap-2">
                <button
                    onClick={() => onQuantityChange(item.id, item.quantity - 1)}
                    disabled={item.quantity === 1}
                    className="px-2 py-1 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
                >
                    -
                </button>
                <span className="px-3">{item.quantity}</span>
                <button
                    onClick={() => onQuantityChange(item.id, item.quantity + 1)}
                    className="px-2 py-1 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
                >
                    +
                </button>
            </div>

            {/* Remove Button */}
            <div className="flex items-center gap-4">
                <p className="font-semibold text-gray-800">
                    ${(item.price * item.quantity).toFixed(2)}
                </p>
                <button
                    onClick={() => onRemove(item.id)}
                    className="text-red-500 hover:text-red-700 transition"
                >
                    Remove
                </button>
            </div>
        </div>
    );
};

export default CartItem;
