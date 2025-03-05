import axios from "axios";
import {useAuthStore} from "@/store/authStore";
import {refreshToken} from "./authService";

const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_BASE_API_URL,
    withCredentials: true,
});

// Request Interceptor: Add access token to headers
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

// Response Interceptor: Handle 401 Unauthorized errors and token refresh
axiosInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;
        // Check if the error is a 401 and the request hasn't been retried
        if (error.response?.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;
            try {
                // Attempt to get a new access token
                const newAccessToken = await refreshToken();

                if (newAccessToken) {
                    // Update the auth store with the new access token
                    useAuthStore.setState((state) => ({
                        user: state.user
                            ? {...state.user, accessToken: newAccessToken}
                            : null,
                    }));

                    // Update the original request with the new token
                    originalRequest.headers["Authorization"] =
                        `Bearer ${newAccessToken}`;

                    // Retry the original request
                    return axiosInstance(originalRequest);
                }
            } catch (refreshError) {
                // If token refresh fails, log out the user
                useAuthStore.getState().logout();
                throw refreshError;
            }
        }

        // For all other errors, reject the promise
        return Promise.reject(error);
    },
);

export default axiosInstance;
