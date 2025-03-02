import axios from "axios";

const API_URL = process.env.REACT_APP_BASE_API_URL + "/search";

// API tìm kiếm quiz theo title
export const searchQuizzes = async (query: string) => {
    try {
        const response = await axios.get(
            `${API_URL}?q=${encodeURIComponent(query)}`,
        );
        return response.data; // Trả về danh sách quiz
    } catch (error) {
        if (axios.isAxiosError(error)) {
            throw error.response?.data?.message || "Search failed";
        }
        throw "An unexpected error occurred";
    }
};
