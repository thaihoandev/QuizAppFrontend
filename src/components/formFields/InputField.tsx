import React from 'react'
import { UseFormRegister } from 'react-hook-form'

interface InputFieldProps {
    label: string
    id: string
    name: string
    type?: string
    placeholder?: string
    register: UseFormRegister<any>
    error?: string
}

const InputField: React.FC<InputFieldProps> = ({
    label,
    id,
    name,
    type = 'text',
    placeholder,
    register,
    error,
}) => {
    return (
        <div className="mb-6 form-control-validation">
            <label htmlFor={id} className="form-label">
                {label}
            </label>
            <input
                type={type}
                className="form-control"
                id={id}
                {...register(name)}
                placeholder={placeholder}
            />
            {error && <p className="text-danger">{error}</p>}
        </div>
    )
}

export default InputField
