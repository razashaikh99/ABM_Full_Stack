// src/Utils/constants.js

// 🌍 Site Info
export const SITE_NAME = "KitchenKart";
export const SITE_TAGLINE = "Your Trusted Kitchen Essentials Store";

// 💰 Currency Settings
export const CURRENCY_SYMBOL = "₨";
export const CURRENCY_CODE = "PKR";

// 🚀 API / Backend URLs (example)
export const API_BASE_URL = "https://api.kitchenkart.com";

// 🛍️ Categories (used globally)
export const PRODUCT_CATEGORIES = [
    "Cookware",
    "Bakeware",
    "Cutlery",
    "Storage",
    "Appliances",
    "Cleaning",
];

// ⚙️ Toast Notification Config
export const TOAST_CONFIG = {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
};

// 🔐 Auth Keys for LocalStorage
export const AUTH_KEYS = {
    TOKEN: "kk_auth_token",
    USER: "kk_user_data",
    CART: "kk_cart_items",
};
