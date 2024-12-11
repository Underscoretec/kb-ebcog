import React from 'react'

const FacultyExperience = ({ data }: any) => {


    return (
        <div className="px-4 md:px-8">
            <div  className={`flex flex-col gap-8 py-3 sm:py-5 xl:py-8 ${
                    data?.achievements ? 'border-b border-[#E5E7EB]' : ''
                }`}>
                {data?.facultyExperience?.map((section: any, index: any) => (
                    <div key={index}>
                        {section?.title &&
                            <div className="font-montserrat text-[14px] sm:text-[15px] xl:text-[16px] font-semibold leading-[20px] pb-1">
                                {section?.title}
                            </div>
                        }

                        <ul className="text-[#555555] font-montserrat text-[14px] sm:text-[15px] xl:text-[16px] font-normal leading-[24px] list-disc pl-5 pt-1">
                            {section?.items?.map((item: any, idx: any) => (
                                <li key={idx} className='py-1'>{item}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
            {data?.achievements && <>
                <div className="text-[#290849] font-montserrat text-[15px] sm:text-[17px] xl:text-[19px] font-bold leading-[28.5px] py-8">
                    Achievements and Recognition
                </div>
                <div className="flex flex-col gap-8 pb-8">
                    {data?.achievements?.map((section: any, index: any) => (
                        <div key={index}>
                            {section?.title &&
                                <div className="font-montserrat text-[14px] sm:text-[15px] xl:text-[16px] font-semibold leading-[20px] pb-1">
                                    {section?.title}
                                </div>
                            }
                            <ul className="text-[#555555] font-montserrat text-[14px] sm:text-[15px] xl:text-[16px] font-normal leading-[24px] list-disc pl-5 pt-1">
                                {section?.items?.map((item: any, idx: any) => (
                                    <li key={idx} className='py-1'>{item}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </>}
        </div>
    );
};

export default FacultyExperience