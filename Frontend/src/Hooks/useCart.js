import { useMemo } from "react";
import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { cartActions, selectCartCount, selectCartTotal } from "../Redux/cartSlice";

export const useCart = () => {
    const cart = useSelector((state) => state.cart);
    const cartCount = useSelector(selectCartCount);
    const cartTotal = useSelector(selectCartTotal);
    const dispatch = useDispatch();
    const actions = useMemo(() => bindActionCreators(cartActions, dispatch), [dispatch]);

    return {
        ...cart,
        ...actions,
        cartCount,
        cartTotal,
    };
};
