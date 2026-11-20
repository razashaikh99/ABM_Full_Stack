import { createSlice } from "@reduxjs/toolkit";
import { cartDefaults } from "../config";

export const isValidCartItem = (item) =>
    !!item &&
    ["string", "number"].includes(typeof item.id) &&
    Number.isFinite(item.price) &&
    item.price >= 0 &&
    Number.isSafeInteger(item.quantity) &&
    item.quantity > 0;

const cartSlice = createSlice({
    name: "cart",
    initialState: cartDefaults,
    reducers: {
        addToCart: {
            reducer: (state, { payload }) => {
                const { product, quantity } = payload;

                if (!isValidCartItem({ ...product, quantity })) return;

                const existing = state.cartItems.find((item) => item.id === product.id);

                if (existing) {
                    const nextQuantity = existing.quantity + quantity;

                    if (Number.isSafeInteger(nextQuantity)) existing.quantity = nextQuantity;
                } else {
                    state.cartItems.push({ ...product, quantity });
                }
            },
            prepare: (product, quantity = 1) => ({ payload: { product, quantity } }),
        },
        removeFromCart: (state, { payload: id }) => {
            state.cartItems = state.cartItems.filter((item) => item.id !== id);
        },
        updateQuantity: {
            reducer: (state, { payload }) => {
                if (!Number.isSafeInteger(payload.quantity) || payload.quantity < 1) return;

                const item = state.cartItems.find((item) => item.id === payload.id);

                if (item) item.quantity = payload.quantity;
            },
            prepare: (id, quantity) => ({ payload: { id, quantity } }),
        },
        clearCart: (state) => { state.cartItems = []; },
        openCart: (state) => { state.isCartOpen = true; },
        closeCart: (state) => { state.isCartOpen = false; },
        toggleCart: (state) => { state.isCartOpen = !state.isCartOpen; },
    },
});

export const cartActions = cartSlice.actions;

export const selectCartTotal = (state) =>
    state.cart.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

export const selectCartCount = (state) =>
    state.cart.cartItems.reduce((count, item) => count + item.quantity, 0);

export default cartSlice.reducer;
