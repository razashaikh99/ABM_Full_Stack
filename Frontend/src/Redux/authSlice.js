import { createSlice } from "@reduxjs/toolkit";
import { authDefaults } from "../config";

const authSlice = createSlice({
    name: "auth",
    initialState: authDefaults,
    reducers: {
        login: {
            reducer: (state, { payload }) => {
                state.user = payload.user;
                state.token = payload.token;
            },
            prepare: (user, token) => ({ payload: { user, token } }),
        },
        logout: () => authDefaults,
    },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
