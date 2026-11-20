import axios from "axios";

const http = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api",
    timeout: 30000,
});

export async function post(url, data) {
    const response = await http.post(url, data);

    return response.data;
}
