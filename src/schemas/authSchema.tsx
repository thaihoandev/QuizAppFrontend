import * as yup from 'yup'

export const loginSchema = yup.object().shape({
    username: yup
        .string()
        .required('Username is required')
        .min(3, 'Must be at least 3 characters'),
    password: yup
        .string()
        .min(6, 'Password must be at least 6 characters')
        .required('Password is required'),
    rememberMe: yup.boolean(),
})

export const registerSchema = yup.object().shape({
    username: yup
        .string()
        .required('Username is required')
        .min(3, 'Must be at least 3 characters'),
    email: yup.string().email('Invalid email').required('Email is required'),
    password: yup
        .string()
        .min(6, 'Must be at least 6 characters')
        .required('Password is required'),
    terms: yup
        .boolean()
        .oneOf([true], 'You must accept the terms and conditions'),
})
