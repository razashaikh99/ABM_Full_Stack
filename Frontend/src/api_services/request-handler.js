import { post } from "./http-provider";

const SERVICE_URLS = {
    login: "/auth/login",
    register: "/auth/register",
};

const apiServices = {
    login: (data) => post(SERVICE_URLS.login, data),
    register: (data) => post(SERVICE_URLS.register, data),
};

export default apiServices;
