import { authDefaults, cartDefaults, storageKeys } from "../config";
import { isValidCartItem } from "./cartSlice";

export function loadState() {
    let auth = authDefaults;
    let cart = cartDefaults;

    try {
        const user = JSON.parse(localStorage.getItem(storageKeys.user) || "null");
        const token = localStorage.getItem(storageKeys.token);

        if (user && typeof user === "object" && !Array.isArray(user) && token) {
            auth = { user, token };
        }
    } catch {
        auth = authDefaults;
    }

    try {
        const items = JSON.parse(localStorage.getItem(storageKeys.cart) || "[]");

        if (Array.isArray(items)) cart = { ...cartDefaults, cartItems: items.filter(isValidCartItem) };
    } catch {
        cart = cartDefaults;
    }

    return { auth, cart };
}

function saveStorage(write) {
    try {
        write();
    } catch {
        return;
    }
}

export function persistState(store) {
    let previous = store.getState();

    return store.subscribe(() => {
        const state = store.getState();

        saveStorage(() => {
            if (state.auth !== previous.auth) {
                if (state.auth.user && state.auth.token) {
                    localStorage.setItem(storageKeys.user, JSON.stringify(state.auth.user));
                    localStorage.setItem(storageKeys.token, state.auth.token);
                } else {
                    localStorage.removeItem(storageKeys.user);
                    localStorage.removeItem(storageKeys.token);
                }
            }
        });

        saveStorage(() => {
            if (state.cart.cartItems !== previous.cart.cartItems) {
                localStorage.setItem(storageKeys.cart, JSON.stringify(state.cart.cartItems));
            }
        });

        previous = state;
    });
}
