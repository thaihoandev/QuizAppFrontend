import React, { useState } from 'react'
import { UseFormRegister } from 'react-hook-form'

interface PasswordFieldProps {
    label: string
    id: string
    name: string
    placeholder?: string
    register: UseFormRegister<any>
    error?: string
}

const PasswordField: React.FC<PasswordFieldProps> = ({
    label,
    id,
    name,
    placeholder,
    register,
    error,
}) => {
    const [showPassword, setShowPassword] = useState(false)

    return (
        <div className="form-password-toggle form-control-validation">
            <label className="form-label" htmlFor={id}>
                {label}
            </label>
            <div className="input-group input-group-merge">
                <input
                    type={showPassword ? 'text' : 'password'}
                    id={id}
                    className="form-control"
                    {...register(name)}
                    placeholder={placeholder}
                />
                <span
                    className="input-group-text cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)}
                >
                    <i
                        className={`icon-base bx ${showPassword ? 'bx-show' : 'bx-hide'}`}
                    ></i>
                </span>
            </div>
            {error && <p className="text-danger">{error}</p>}
        </div>
    )
}

export default PasswordField
