import React from 'react';

interface TextAreaFieldProps {
    label?: string;
    placeholder?: string;
    id: string;
    className?: string;
    rows: number;
    value?: string;
    onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
    onBlur?: (event: React.FocusEvent<HTMLTextAreaElement>) => void;
    error?: any;
}

const TextAreaField: React.FC<TextAreaFieldProps> = ({
    label,
    placeholder,
    id,
    className,
    rows,
    value,
    onChange,
    onBlur,
    error
}) => (
    <div className={className}>
        {label && <label htmlFor={id} className="font-inter text-sm font-semibold leading-[17px] text-[#454C5C]">
            {label}
        </label>}
        <textarea
            id={id}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            className={`border border-[#DBDBDB] outline-none hover:border-[#FF320561] p-2 text-inter text-sm font-normal leading-[17px] rounded-[5px] ${error ? 'border-red-500' : ''}`}
            placeholder={placeholder}
            rows={rows}
        ></textarea>
        {error && (
            <div className="text-red-500 text-xs mt-1">
                {error}
            </div>
        )}
    </div>
);

export default TextAreaField;
