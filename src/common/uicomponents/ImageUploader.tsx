import React, { useState } from 'react';
import { PhotoIcon } from '@heroicons/react/24/solid';
import { RxCrossCircled } from 'react-icons/rx';
import { ImFilePdf } from "react-icons/im";

interface ImageUploaderProps {
    label: string;
    onUpload: (file: File | null) => void;
    value?: File | null; 
    accept?: string;
}

const ImageUploader: React.FC<ImageUploaderProps> = ({ label, onUpload, value, accept = 'image/*,application/pdf' }) => {
    const [file, setFile] = useState<File | null>(value || null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = event.target.files?.[0];
        if (selectedFile) {
            setFile(selectedFile);
            onUpload(selectedFile); 
        }
    };

    const handleRemoveFile = () => {
        setFile(null);
        onUpload(null); 
    };

    return (
        <div className="col-span-full">
            <label htmlFor="file-upload" className="block text-sm font-medium text-gray-900">
                {label}
            </label>
            {!file ? (
                <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-300 px-6 py-10">
                    <div className="text-center">
                        <PhotoIcon aria-hidden="true" className="mx-auto h-12 w-12 text-gray-300" />
                        <div className="mt-4 flex text-sm text-gray-600">
                            <label
                                htmlFor="file-upload"
                                className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 hover:text-indigo-500"
                            >
                                <span>Upload a file</span>
                                <input
                                    id="file-upload"
                                    name="file-upload"
                                    type="file"
                                    accept={accept}
                                    className="sr-only"
                                    onChange={handleFileChange}
                                />
                            </label>
                            <p className="pl-1">or drag and drop</p>
                        </div>
                        <p className="text-xs text-gray-600">PNG, JPG, JPEG, PDF up to 10MB</p>
                    </div>
                </div>
            ) : (
                <div className="mt-3 p-3 relative flex flex-col items-center border border-dashed border-gray-300 rounded-lg">
                    {file.type.startsWith('image/') ? (
                        <img
                            src={URL.createObjectURL(file)}
                            alt="Uploaded preview"
                            className="w-auto h-[100px] object-cover"
                        />
                    ) : (
                        <div className="w-[100px] h-[100px] flex items-center justify-center text-gray-600">
                            <ImFilePdf className=' w-[60px] h-[60px] text-[#c91e14]'/>
                        </div>
                    )}
                    <div className="text-center pt-2 text-sm">{file.name}</div>
                    <RxCrossCircled
                        className="absolute w-[26px] h-[26px] top-[-8px] right-[-8px] cursor-pointer text-[#E4087F]"
                        onClick={handleRemoveFile}
                    />
                </div>
            )}
        </div>
    );
};

export default ImageUploader;
