import React from 'react';

const CheckBox = ({label}:any) => {
    return (
        <div className="relative flex items-start">
          <div className="flex h-6 items-center">
            <input
              id="comments"
              name="comments"
              type="checkbox"
              aria-describedby="comments-description"
              className="size-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
            />
          </div>
          <div className="ml-3 text-sm/6">
            <label htmlFor="comments" className="text-gray-900 font-montserrat text-sm font-medium leading-5">
            {label}
            </label>
          </div>
        </div>
    );
};

export default CheckBox;
