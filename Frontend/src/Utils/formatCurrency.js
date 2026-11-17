import { CURRENCY_SYMBOL, CURRENCY_CODE } from "./constants";

export const formatCurrency = (amount) => {
    if (isNaN(amount)) return `${CURRENCY_SYMBOL}0.00`;

    return new Intl.NumberFormat("en-PK", {
        style: "currency",
        currency: CURRENCY_CODE,
        minimumFractionDigits: 2,
    })
        .format(amount)
        .replace(CURRENCY_CODE, CURRENCY_SYMBOL);
};
