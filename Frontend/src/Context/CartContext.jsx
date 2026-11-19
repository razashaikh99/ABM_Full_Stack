import { useCallback, useEffect, useState } from "react";
import { CartContext } from "./cart.context";
import { AUTH_KEYS } from "../Utils/constants";

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(() => {
        try {
            const stored = JSON.parse(localStorage.getItem(AUTH_KEYS.CART) || "[]");

            return Array.isArray(stored)
                ? stored.filter(
                      (item) =>
                          item &&
                          ["string", "number"].includes(typeof item.id) &&
                          Number.isFinite(item.price) &&
                          item.price >= 0 &&
                          Number.isSafeInteger(item.quantity) &&
                          item.quantity > 0
                  )
                : [];
        } catch {
            return [];
        }
    });

    const [isCartOpen, setIsCartOpen] = useState(false);

    useEffect(() => {
        try {
            localStorage.setItem(AUTH_KEYS.CART, JSON.stringify(cartItems));
        } catch {
            return;
        }
    }, [cartItems]);

    const openCart = useCallback(() => setIsCartOpen(true), []);

    const closeCart = useCallback(() => setIsCartOpen(false), []);

    const toggleCart = useCallback(() => setIsCartOpen((previous) => !previous), []);

    const addToCart = (product, quantity = 1) => {
        if (
            !product ||
            !["string", "number"].includes(typeof product.id) ||
            !Number.isFinite(product.price) ||
            product.price < 0 ||
            !Number.isSafeInteger(quantity) ||
            quantity < 1
        )
            return;

        setCartItems((prev) => {
            const existing = prev.find((item) => item.id === product.id);
            if (existing) {
                return prev.map((item) =>
                    item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
                );
            }
            return [...prev, { ...product, quantity }];
        });
    };

    const removeFromCart = (id) => {
        setCartItems((prev) => prev.filter((item) => item.id !== id));
    };

    const updateQuantity = (id, quantity) => {
        if (!Number.isSafeInteger(quantity) || quantity < 1) return;

        setCartItems((prev) =>
            prev.map((item) => (item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item))
        );
    };

    const clearCart = () => setCartItems([]);

    const cartTotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

    const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

    return (
        <CartContext.Provider
            value={{
                cartItems,
                addToCart,
                removeFromCart,
                updateQuantity,
                clearCart,
                cartTotal,
                cartCount,
                isCartOpen,
                openCart,
                closeCart,
                toggleCart,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};
