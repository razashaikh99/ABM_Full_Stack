// src/Utils/formatCurrency.js
import { CURRENCY_SYMBOL, CURRENCY_CODE } from "./constants";

/**
 * 💰 Format any number into currency format
 * Example: formatCurrency(2500) → "₨2,500.00"
 */
export const formatCurrency = (amount) => {
    if (isNaN(amount)) return `${CURRENCY_SYMBOL}0.00`;

    return new Intl.NumberFormat("en-PK", {
        style: "currency",
        currency: CURRENCY_CODE,
        minimumFractionDigits: 2,
    })
        .format(amount)
        .replace(CURRENCY_CODE, CURRENCY_SYMBOL); // replace "PKR" with "₨"
};
