import { createContext, useState, useEffect, ReactNode } from 'react'
import { loginApi, registerApi } from '@/services/authService'
import axios from 'axios'

interface User {
    id: string
    username: string
    email: string
    token: string
}

interface RegisterData {
    username: string
    email: string
    password: string
}

interface AuthContextType {
    user: User | null
    login: (username: string, password: string) => Promise<void>
    register: (userData: RegisterData) => Promise<void>
    logout: () => void
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User | null>(() => {
        const storedUser = localStorage.getItem('user')
        return storedUser ? JSON.parse(storedUser) : null
    })

    // ✅ Hàm login 
    const login = async (username: string, password: string) => {
        try {
            const userData = await loginApi(username, password)
            setUser(userData)
            localStorage.setItem('user', JSON.stringify(userData))
        } catch (error) {
            if (axios.isAxiosError(error)) {
                throw error.response?.data?.message || 'Login failed'
            }
            throw 'An unexpected error occurred'
        }
    }

    // ✅ Hàm register
    const register = async (userData: RegisterData) => {
        try {
            const newUser = await registerApi(userData)
            setUser(newUser) // Đăng nhập ngay sau khi đăng ký thành công
            localStorage.setItem('user', JSON.stringify(newUser))
        } catch (error) {
            if (axios.isAxiosError(error)) {
                throw error.response?.data?.message || 'Registration failed'
            }
            throw 'An unexpected error occurred'
        }
    }

    // ✅ Hàm logout
    const logout = () => {
        setUser(null)
        localStorage.removeItem('user')
    }

    return (
        <AuthContext.Provider value={{ user, login, register, logout }}>
            {children}
        </AuthContext.Provider>
    )
}
