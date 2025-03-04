import axios from "axios";
import {useAuthStore} from "@/store/authStore";
import {refreshToken} from "./authService";

const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_BASE_API_URL,
    withCredentials: true,
});

// Thêm accessToken vào request headers
axiosInstance.interceptors.request.use(
    (config) => {
        const accessToken = useAuthStore.getState().user?.accessToken;
        if (accessToken) {
            config.headers.Authorization = `Bearer ${accessToken}`;
        }
        return config;
    },
    (error) => Promise.reject(error),
);

// Interceptor xử lý lỗi 401 (Token hết hạn)
axiosInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;

        if (error.response?.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;

            try {
                const newAccessToken = await refreshToken();
                if (newAccessToken) {
                    useAuthStore.setState((state) => ({
                        user: state.user
                            ? {...state.user, accessToken: newAccessToken}
                            : null,
                    }));

                    originalRequest.headers["Authorization"] =
                        `Bearer ${newAccessToken}`;
                    return axiosInstance(originalRequest);
                }
            } catch (refreshError) {
                useAuthStore.getState().logout();
                throw refreshError;
            }
        }
        return Promise.reject(error);
    },
);

export default axiosInstance;
