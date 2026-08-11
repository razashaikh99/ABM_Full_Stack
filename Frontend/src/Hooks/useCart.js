// src/Hooks/useCart.js
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";

// ✅ Custom hook for using Cart Context
export const useCart = () => {
    const context = useContext(CartContext);

    if (!context) {
        throw new Error("useCart must be used within a CartProvider");
    }

    return context;
};
