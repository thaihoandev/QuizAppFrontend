import axios from "axios";
import {useAuthStore} from "@/store/authStore";

const API_URL = `${process.env.REACT_APP_BASE_API_URL}/users`;

const axiosInstance = axios.create({
    baseURL: API_URL,
    withCredentials: true, // Quan trọng khi sử dụng cookie/token
});

axiosInstance.interceptors.request.use(
    async (config) => {
        const accessToken = useAuthStore.getState().user?.accessToken;
        if (accessToken) {
            config.headers.Authorization = `Bearer ${accessToken}`;
        }
        return config;
    },
    (error) => Promise.reject(error),
);

/**
 * Lấy danh sách tất cả người dùng (Chỉ Admin)
 */
export const getAllUsers = async (): Promise<any[]> => {
    try {
        const response = await axiosInstance.get("/");
        return response.data;
    } catch (error: any) {
        if (error.response?.status === 403) {
            throw new Error("Bạn không có quyền truy cập");
        }
        console.error("Lỗi khi lấy danh sách người dùng:", error);
        throw error;
    }
};

/**
 * Lấy thông tin người dùng hiện tại (Backend tự lấy userId từ token)
 */
export const getCurrentUser = async (): Promise<any> => {
    try {
        const response = await axiosInstance.get("/me"); // Gọi API /users/me
        return response.data;
    } catch (error: any) {
        if (error.response?.status === 403) {
            throw new Error("Bạn không có quyền truy cập thông tin này");
        }
        if (error.response?.status === 404) {
            throw new Error("Người dùng không tồn tại");
        }
        console.error("Lỗi khi lấy thông tin người dùng:", error);
        throw error;
    }
};

/**
 * Lấy thông tin người dùng theo ID (Admin mới có quyền truy cập)
 */
export const getUserById = async (userId: string): Promise<any> => {
    try {
        const response = await axiosInstance.get(`/${userId}`);
        return response.data;
    } catch (error: any) {
        if (error.response?.status === 403) {
            throw new Error("Bạn không có quyền truy cập thông tin này");
        }
        if (error.response?.status === 404) {
            throw new Error("Người dùng không tồn tại");
        }
        console.error(`Lỗi khi lấy thông tin người dùng ${userId}:`, error);
        throw error;
    }
};
