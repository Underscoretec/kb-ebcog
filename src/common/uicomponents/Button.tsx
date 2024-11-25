// components/Button.tsx
import React from "react";

interface ButtonProps {
    label: string;
    type?: "button" | "submit" | "reset";
    onClick?: () => void;
    isLoading?: boolean;
    disabled?: boolean;
    className?: string;
}

const Button: React.FC<ButtonProps> = ({
    label,
    type = "button",
    onClick,
    isLoading = false,
    disabled = false,
    className = '',
}) => {
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled || isLoading}
            className={`cursor-pointer ${className}`}
        >
            {isLoading ? "Loading..." : label}
        </button>
    );
};

export default Button;
