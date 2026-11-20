import { useMemo } from "react";
import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../Redux/authSlice";

export const useAuth = () => {
    const auth = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const actions = useMemo(() => bindActionCreators(authActions, dispatch), [dispatch]);

    return {
        ...auth,
        ...actions,
        isAuthenticated: !!auth.user && !!auth.token,
    };
};
