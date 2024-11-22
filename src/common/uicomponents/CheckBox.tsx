import React from 'react';

const CheckBox = ({label}:any) => {
    return (
        <div className="relative flex items-start">
            <div className="flex h-6 items-center">
                <input
                    id="comments"
                    aria-describedby="comments-description"
                    name="comments"
                    type="checkbox"
                    className="size-4 rounded border-gray-300"
                    style={{accentColor:'#E4087F'}}
                />
            </div>
            <div className="ml-3 text-sm/6">
                <label htmlFor="comments" className="text-[#111827] font-montserrat text-sm font-medium leading-5">
                    {label}
                </label>
            </div>
        </div>
    );
};

export default CheckBox;
