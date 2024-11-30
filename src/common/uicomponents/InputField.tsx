
// components/InputField.tsx
import React, { useState } from "react";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";

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
    onBlur?: any;
    requiredDesign?:boolean
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
    onBlur,
    requiredDesign = false
}) => {

    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const toggleVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };

    return (
        <div className={`space-y-1 relative ${className}`}>
            <label htmlFor={id} className="font-montserrat block text-sm font-medium text-gray-700">
                {label} {requiredDesign && <span className="text-[#EB5757]">*</span>}
            </label>
            <input
                type={isPasswordVisible ? 'text' : type}
                id={id}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                placeholder={placeholder}
                required={required}
                className={`w-full font-montserrat border border-[#DBDBDB] outline-none hover:border-[#E4087F61] p-3 text-inter text-sm font-normal leading-[17px] rounded-[5px] ${error ? 'border-red-500' : ''}`}
            />
            {type === "password" &&
                <div className="absolute top-8 right-2">
                    {isPasswordVisible ? <AiOutlineEye className="cursor-pointer" onClick={toggleVisibility} /> : <AiOutlineEyeInvisible className="cursor-pointer" onClick={toggleVisibility} />}

                </div>
            }

            {error && (
                <div className="text-red-500 text-xs mt-1">
                    {error}
                </div>
            )}
        </div>
    );
};

export default InputField;
