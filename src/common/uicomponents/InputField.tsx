
// components/InputField.tsx
import React from "react";

interface InputFieldProps {
    label: string;
    type?: string;
    id: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    required?: boolean;
    className?: string;
    error?: any;
    onBlur?: any
}

const InputField: React.FC<InputFieldProps> = ({
    label,
    type = 'text',
    id,
    value,
    onChange,
    placeholder,
    required = false,
    className = "",
    error,
    onBlur
}) => {
    return (
        <div className={`space-y-1 ${className}`}>
            <label htmlFor={id} className="block text-sm font-medium text-gray-700">
                {label}
            </label>
            <input
                type={type}
                id={id}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                placeholder={placeholder}
                required={required}
                className={`w-full border border-[#DBDBDB] outline-none hover:border-[#E4087F61] p-3 text-inter text-sm font-normal leading-[17px] rounded-[5px] ${error ? 'border-red-500' : ''}`}
            />
            {error && (
                <div className="text-red-500 text-xs mt-1">
                    {error}
                </div>
            )}
        </div>
    );
};

export default InputField;
