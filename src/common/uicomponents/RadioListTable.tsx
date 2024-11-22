import React from 'react'

const RadioListTable = () => {
    return (
        <fieldset aria-label="Privacy setting">
            <div className="-space-y-px rounded-md bg-white">
                <label aria-label="Public access" aria-description="This project would be available to anyone who has the link" className="relative flex cursor-pointer rounded-tl-md rounded-tr-md border p-4 focus:outline-none">
                    <input type="radio" name="privacy-setting" value="Public access" className="mt-0.5 size-4 shrink-0 cursor-pointer border-gray-300 text-indigo-600 focus:ring-indigo-600 active:ring-2 active:ring-indigo-600 active:ring-offset-2"/> 
                        <span className="ml-3 flex flex-col">
                            <span className="block text-sm font-medium">Reproductive Medicine and Endocrinology</span>
                        </span>
                </label>
                <label aria-label="Private to Project Members" aria-description="Only members of this project would be able to access" className="relative flex cursor-pointer border p-4 focus:outline-none">
                    <input type="radio" name="privacy-setting" value="Private to Project Members" className="mt-0.5 size-4 shrink-0 cursor-pointer border-gray-300 text-indigo-600 focus:ring-indigo-600 active:ring-2 active:ring-indigo-600 active:ring-offset-2"/>
                        <span className="ml-3 flex flex-col">
                            <span className="block text-sm font-medium">Ultrasound and Prenatal Medicine</span>
                        </span>
                </label>
                <label aria-label="Private to you" aria-description="You are the only one able to access this project" className="relative flex cursor-pointer rounded-bl-md rounded-br-md border p-4 focus:outline-none">
                    <input type="radio" name="privacy-setting" value="Private to you" className="mt-0.5 size-4 shrink-0 cursor-pointer border-gray-300 text-indigo-600 focus:ring-indigo-600 active:ring-2 active:ring-indigo-600 active:ring-offset-2"/>
                        <span className="ml-3 flex flex-col">
                            <span className="block text-sm font-medium">Hysteroscopy and Laparoscopy</span>
                        </span>
                </label>
                <label aria-label="Private to you" aria-description="You are the only one able to access this project" className="relative flex cursor-pointer rounded-bl-md rounded-br-md border p-4 focus:outline-none">
                    <input type="radio" name="privacy-setting" value="Private to you" className="mt-0.5 size-4 shrink-0 cursor-pointer border-gray-300 text-indigo-600 focus:ring-indigo-600 active:ring-2 active:ring-indigo-600 active:ring-offset-2"/>
                        <span className="ml-3 flex flex-col">
                            <span className="block text-sm font-medium">Maternal Medicine</span>
                        </span>
                </label>
            </div>
        </fieldset>
    )
}

export default RadioListTable