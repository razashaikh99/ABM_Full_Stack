import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import cartReducer from "./cartSlice";
import { loadState, persistState } from "./storage";

const store = configureStore({
    reducer: { auth: authReducer, cart: cartReducer },
    preloadedState: loadState(),
});

persistState(store);

export default store;
