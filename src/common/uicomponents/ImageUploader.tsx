import React, { useState } from 'react';
import { PhotoIcon } from '@heroicons/react/24/solid';
import { RxCrossCircled } from 'react-icons/rx';
import { ImFilePdf } from "react-icons/im";

interface ImageUploaderProps {
    label: string;
    id: string;
    onUpload: (file: File | null) => void;
    value?: File | null;
    accept?: string;
}

const ImageUploader: React.FC<ImageUploaderProps> = ({
    label,
    id,
    onUpload,
    value,
    accept = 'image/jpeg,image/png,application/pdf',
}) => {
    const [file, setFile] = useState<File | null>(value || null);
    const [error, setError] = useState<string | null>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = event.target.files?.[0];
        if (selectedFile) {
            if (!accept.split(',').includes(selectedFile.type)) {
                setError('Invalid file type. Please upload a JPG, JPEG, PNG, or PDF file.');
                return;
            }
            setFile(selectedFile);
            onUpload(selectedFile);
            setError(null); 
        }
    };

    const handleRemoveFile = () => {
        setFile(null);
        onUpload(null);
        setError(null);
    };

    return (
        <div className="col-span-full">
            <label htmlFor={id} className="block text-sm font-medium text-gray-900">
                {label}
            </label>
            {!file ? (
                <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-300 px-6 py-10">
                    <div className="text-center">
                        <PhotoIcon aria-hidden="true" className="mx-auto h-12 w-12 text-gray-300" />
                        <div className="mt-4 flex text-sm text-gray-600">
                            <label
                                htmlFor={id}
                                className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 hover:text-indigo-500"
                            >
                                <span>Upload a file</span>
                                <input
                                    id={id}
                                    name={id}
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
                            className="w-auto h-[100px] object-contain"
                        />
                    ) : (
                        <div className="w-[100px] h-[100px] flex items-center justify-center text-gray-600">
                            <ImFilePdf className="w-[60px] h-[60px] text-[#c91e14]" />
                        </div>
                    )}
                    <div className="text-center pt-2 text-sm">{file.name}</div>
                    <RxCrossCircled
                        className="absolute w-[26px] h-[26px] top-[-8px] right-[-8px] cursor-pointer text-[#E4087F]"
                        onClick={handleRemoveFile}
                    />
                </div>
            )}
            {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
        </div>
    );
};

export default ImageUploader;
