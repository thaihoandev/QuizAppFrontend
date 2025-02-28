import axios from 'axios'

const API_URL = process.env.REACT_APP_BASE_API_URL + "/auth" 

interface UserRequestDTO {
    username: string
    email: string
    password: string
}

// API đăng nhập
export const loginApi = async (username: string, password: string) => {
    try {
        const response = await axios.post(`${API_URL}/login`, { username, password })
        return response.data
    } catch (error) {
        if (axios.isAxiosError(error)) {
            throw error.response?.data?.message || 'Login failed'
        }
        throw 'An unexpected error occurred'
    }
}

// API đăng ký
export const registerApi = async (userData: UserRequestDTO) => {
    try {
        const response = await axios.post(`${API_URL}/register`, userData)
        return response.data
    } catch (error) {
        if (axios.isAxiosError(error)) {
            throw error.response?.data?.message || 'Registration failed'
        }
        throw 'An unexpected error occurred'
    }
}
