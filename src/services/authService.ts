import axios from "axios";
import axiosInstance from "./axiosInstance";
import {useAuthStore} from "@/store/authStore";
import {handleApiError} from "@/utils/apiErrorHandler";

const API_URL = `${process.env.REACT_APP_BASE_API_URL}/auth`;

interface UserRequestDTO {
    username: string;
    email: string;
    password: string;
}

// ✅ API đăng nhập
export const loginApi = async (username: string, password: string) => {
    try {
        const response = await axiosInstance.post(`${API_URL}/login`, {
            username,
            password,
        });
        return response.data;
    } catch (error) {
        handleApiError(error, "Login failed");
    }
};

// ✅ API đăng ký
export const registerApi = async (userData: UserRequestDTO) => {
    try {
        const response = await axiosInstance.post(
            `${API_URL}/register`,
            userData,
        );
        return response.data;
    } catch (error) {
        handleApiError(error, "Registration failed");
    }
};

// ✅ API đăng nhập bằng Google
export const loginGoogleApi = async (access_token: string) => {
    try {
        const response = await axiosInstance.post(
            `${API_URL}/google`,
            {accessToken: access_token},
            {
                headers: {"Content-Type": "application/json"},
            },
        );
        return response.data;
    } catch (error) {
        handleApiError(error, "Google login failed");
    }
};

// ✅ API làm mới Access Token
export const refreshToken = async (): Promise<string | null> => {
    try {
        const refreshToken = useAuthStore.getState().user?.refreshToken;
        if (!refreshToken) throw new Error("No refresh token available");

        const response = await axiosInstance.post(`${API_URL}/refresh-token`, {
            refreshToken,
        });

        const newAccessToken = response.data.accessToken;

        // Cập nhật token mới vào Zustand
        useAuthStore.setState((state) => ({
            user: state.user
                ? {...state.user, accessToken: newAccessToken}
                : null,
        }));

        // Cập nhật header cho axiosInstance
        axiosInstance.defaults.headers.common["Authorization"] =
            `Bearer ${newAccessToken}`;

        return newAccessToken;
    } catch (error) {
        console.error("Lỗi khi refresh token:", error);

        // Nếu refresh token thất bại, logout user
        useAuthStore.getState().logout();
        return null;
    }
};
