import axios from "axios";

const API_URL = process.env.REACT_APP_BASE_API_URL + "/auth";

interface UserRequestDTO {
    username: string;
    email: string;
    password: string;
}

// API đăng nhập
export const loginApi = async (username: string, password: string) => {
    try {
        const response = await axios.post(`${API_URL}/login`, {
            username,
            password,
        });
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            throw error.response?.data?.message || "Login failed";
        }
        throw "An unexpected error occurred";
    }
};

// API đăng ký
export const registerApi = async (userData: UserRequestDTO) => {
    try {
        const response = await axios.post(`${API_URL}/register`, userData);
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
            // Try to get the error message from different possible locations
            const errorMessage =
                error.response.data?.message || // Standard structure
                error.response.data?.error || // Alternative structure
                (typeof error.response.data === "string"
                    ? error.response.data
                    : null) || // Plain string
                "Registration failed"; // Fallback

            throw errorMessage;
        }

        throw error instanceof Error
            ? error.message
            : "An unexpected error occurred";
    }
};

// API login Google
export const loginGoogleApi = async (access_token: string) => {
    try {
        const response = await axios.post(
            `${API_URL}/google`,
            {accessToken: access_token},
            {
                headers: {
                    "Content-Type": "application/json",
                },
            },
        );
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
            const errorMessage =
                error.response.data?.message ||
                error.response.data?.error ||
                (typeof error.response.data === "string"
                    ? error.response.data
                    : null) ||
                "Google login failed";

            throw errorMessage;
        }

        throw error instanceof Error
            ? error.message
            : "An unexpected error occurred";
    }
};
