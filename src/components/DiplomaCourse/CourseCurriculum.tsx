import React from 'react';

const CourseCurriculum = ({ data }: any) => {
    return (
        <div className='flex flex-col gap-8'>
            {data.curriculumSections.map((section: any, index: any) => (
                <div key={index}>
                    <div className='font-montserrat text-[15px] xs:text-[17px] xl:text-[18px] font-semibold leading-[22px] xs:leading-[27px]'>
                        {section.title}
                    </div>
                    <ul className='text-[#555555] font-montserrat text-[15px] xs:text-[16px] xl:text-[17px] font-normal leading-[27px] list-disc pl-5'>
                        {section.items.map((item: any, itemIndex: any) => (
                            <li key={itemIndex}>{item}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default CourseCurriculum;
