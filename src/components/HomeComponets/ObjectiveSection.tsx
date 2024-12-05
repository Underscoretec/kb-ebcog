import React from 'react'
import objective from '../../../public/objective.png'
import Image from 'next/image';
import icon from '../../../public/icon.png'

const ObjectiveSection = () => {

    const contentData = [
        {
            title: 'Objective',
            description: 'To address skill development gaps across various domains, including medical, surgical, and self-directed learning.',
        },
        {
            title: 'Threefold Goal',
            description: 'Define which skills should be taught to professionals and postgraduate medical students, establish the best instructional methods, and identify the educational resources needed for clinical and surgical skill development.',
        },
        {
            title: 'Skill Classification',
            description: 'Skills will be categorized into assessment and diagnostic skills, procedural knowledge and manual dexterity, and technical and therapeutic skills.',
        },
        {
            title: 'Affiliated Facilities',
            description: 'Professionals and postgraduate medical students will participate in a five-day course focused on both clinical and surgical skills, with training on essential skills in professional settings equipped with audio, video, and equipment on specific procedures throughout.',
        },
        {
            title: 'Collaborations and Certification',
            description: 'Universities, societies, and medical organizations will be invited to send their students and professionals to affiliate skill centers to benefit from these facilities. Upon completing the clinical and surgical skills course, participants will undergo an assessment to qualify for EBCOG certification and DHA accreditation.',
        },
    ];

    return (
        <div className='bg-[#FFF4F8]'>
            <div className='text-[22px] xs:text-[42px] xl:text-[52px] pt- text-[#290849] font-[oswald] leading-[30px] xs:leading-[55px] w-[100%] lg:w-[87%] xl:w-[76%] xl:px-16 3xl:px-24 px-4 xs:px-8'>
                {`Emirates Institute of Postgraduate Medical Sciences &`} <span className='text-[#E4087F]'>{`KnowledgeBridge International`}</span> {`Objectives of launching courses with`} <span className='text-[#E4087F]'>{`EBCOG`}</span>
            </div>

            <div className='flex-row lg:flex xl:px-16 3xl:px-24 px-4 xs:px-8 pb-20 lg:pb-36 '>
                <div className='w-[100%] lg:w-[50%] xl:mt-4'>
                    {contentData.map((item, index) => (
                        <div key={index} className="mt-2 lg:mt-1 xl:mt-2">
                            <div className='flex items-center gap-1 xl:gap-2'>
                                <Image src={icon} alt='icon' className='xl:h-[4%] xl:w-[4%] h-[3%] w-[3%]' />
                                <div className="text-[20px] xl:text-[26px] text-[#290849] font-oswald">{item.title}</div>
                            </div>

                            <div className="text-[14px] xl:text-[17px] text-[#000000] font-montserrat lg:pr-8 xl:pr-24">{item.description}</div>
                        </div>
                    ))}
                </div>
                <div className='w-[100%] lg:w-[50%] relative lg:right-0 lg:bottom-16 xl:bottom-10 2xl:bottom-24'>
                    <Image
                        src={objective}
                        alt="objective"
                        width={3000}
                        height={3000}
                        className='h-auto w-full static lg:absolute'
                    />
                </div>
            </div>
        </div>
    )
}

export default ObjectiveSection
