import {create} from "zustand"
import {persist, createJSONStorage} from "zustand/middleware"
import {loginApi, loginGoogleApi, registerApi} from "@/services/authService"
import axios from "axios"
import {TokenResponse} from "@react-oauth/google"

interface User {
    id: string
    username: string
    email: string
    token: string
}

interface AuthState {
    user: User | null
    login: (username: string, password: string) => Promise<void>
    register: (
        username: string,
        email: string,
        password: string,
    ) => Promise<void>
    loginWithGoogle: (tokenResponse: TokenResponse) => Promise<void>
    logout: () => void
}

// Store Zustand với persist và JSON storage
export const useAuthStore = create<AuthState>()(
    persist(
        (set) => ({
            user: null,

            login: async (username, password) => {
                try {
                    const userData = await loginApi(username, password)
                    set({user: userData})
                    axios.defaults.headers.common["Authorization"] =
                        `Bearer ${userData.token}`
                } catch (error) {
                    if (axios.isAxiosError(error)) {
                        throw error.response?.data?.message || "Login failed"
                    }
                    throw new Error("An unexpected error occurred")
                }
            },

            register: async (username, email, password) => {
                try {
                    const newUser = await registerApi({
                        username,
                        email,
                        password,
                    })
                    set({user: newUser})
                    axios.defaults.headers.common["Authorization"] =
                        `Bearer ${newUser.token}`
                } catch (error) {
                    if (axios.isAxiosError(error)) {
                        throw (
                            error.response?.data?.message ||
                            "Registration failed"
                        )
                    }
                    throw new Error("An unexpected error occurred")
                }
            },

            loginWithGoogle: async (tokenResponse: TokenResponse) => {
                try {
                    if (!tokenResponse.access_token) {
                        throw new Error(
                            "Google login failed. No access token received.",
                        )
                    }

                    // Gửi Access Token đến Spring Boot Backend để xác thực
                    const response = await loginGoogleApi(
                        tokenResponse.access_token,
                    )

                    // Nhận JWT từ backend
                    const userData = response
                    
                    set({user: userData})
                    axios.defaults.headers.common["Authorization"] =
                        `Bearer ${userData.token}`
                } catch (error) {
                    throw new Error("Google login failed. Try again!")
                }
            },

            logout: () => {
                set({user: null})
                delete axios.defaults.headers.common["Authorization"]
            },
        }),
        {
            name: "auth-storage",
            storage: createJSONStorage(() => localStorage),
        },
    ),
)
