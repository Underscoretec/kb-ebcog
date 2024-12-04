import React from "react";



const FacultyPersonalDetails = ({ data }: any) => {
    
    return (
        <div className="px-4 md:px-8">
            {data?.map((section: any, sectionIndex: any) => (
                <div
                    key={sectionIndex}
                    className={`flex flex-col gap-3 ${sectionIndex < data.length - 1 ? "border-b border-[#E5E7EB] py-3 sm:py-5 xl:py-8" : "py-3 sm:py-5 xl:py-8"
                        }`}
                >
                    {section?.title &&
                        <h2 className="text-[#290849] font-montserrat text-[15px] sm:text-[17px] xl:text-[19px] font-bold leading-[28.5px] pb-2">
                            {section?.title}
                        </h2>
                    }
                    {section.items.map((item: any, itemIndex: any) => (
                        <div key={itemIndex} className="flex gap-4">
                            <div>
                                {item?.title &&
                                    <div className="font-montserrat text-[14px] sm:text-[15px] xl:text-[16px] font-semibold leading-[20px] pb-1">
                                        {item?.title}
                                    </div>
                                }
                                <ul className="text-[#555555] font-montserrat text-[14px] sm:text-[15px] xl:text-[16px] font-normal leading-[24px] list-disc pl-5 pt-1">
                                    {item?.description?.map((desc: any, descIndex: any) => (
                                        <li key={descIndex} className='py-1'>{desc}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default FacultyPersonalDetails;
