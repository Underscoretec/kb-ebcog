import React from 'react';

const FacultyPhilosophy = ({data}:any) => {

    return (
        <div className="px-4 md:px-8">
            {data?.map((item:any, index:any) => (
                <div key={index} className="py-8 border-b border-[#E5E7EB]">
                    <h2 className="text-[#290849] font-montserrat text-[19px] font-extrabold leading-[28.5px] pb-1">
                        {item.title}
                    </h2>
                    <div className="text-[#555555] font-montserrat text-[18px] font-normal leading-[27px]">
                        {`"${item.content}"`}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default FacultyPhilosophy;
