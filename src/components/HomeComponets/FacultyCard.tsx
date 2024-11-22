import ImageComponent from '@/common/uicomponents/ImageComponent';
import React from 'react';

interface Faculty {
    id: string;
    facultyName: string;
    Role?: string;
    about: string;
    image: string;
}

interface FacultyCardProps {
    faculty: Faculty;
}

const FacultyCard: React.FC<FacultyCardProps> = ({ faculty }) => {
    return (
        <div className="p-4 bg-white text-[#000] rounded-[15px] flex gap-2">
            <div className="w-[20%]">
                <ImageComponent
                    src={faculty?.image}
                    alt="image"
                    className="h-auto w-full border-2 border-[#E4087F] rounded-[12px]"
                    width={1000}
                    height={1000}
                />
            </div>
            <div className="w-[80%]">
                <h3 className="font-bold text-[#E4087F] font-montserrat text-md leading-8">
                {faculty?.facultyName} {faculty?.Role && `(${faculty.Role})`}
                </h3>
                <p className="font-montserrat text-sm font-medium leading-[22px]">
                    {faculty?.about}
                </p>
            </div>
        </div>
    );
};

export default FacultyCard;
