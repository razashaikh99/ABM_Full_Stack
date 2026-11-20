import apiServices from "../../api_services/request-handler";
import { authActions } from "../authSlice";

const authenticate = (apiService, data) => async (dispatch) => {
    try {
        const response = await apiService(data);

        dispatch(authActions.login(response.user, response.token));

        return response;
    } catch (error) {
        throw new Error(error.response?.data?.message || "Unable to connect. Please try again.");
    }
};

export const loginUser = (data) => authenticate(apiServices.login, data);

export const registerUser = (data) => authenticate(apiServices.register, data);
