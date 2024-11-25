import ImageComponent from '@/common/uicomponents/ImageComponent'
import React from 'react'
import objective from '../../../public/objective.png'

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
            <div className='text-[52px] text-[#290849] w-[90%] border-2 border-lime-600'>
                {`Emirates Institute of Postgraduate Medical Sciences &`} <span className='text-[#E4087F]'>{`KnowledgeBridge International`}</span> {`Objectives of launching courses with`} <span className='text-[#E4087F]'>{`EBCOG`}</span>
             </div>

            <div className='flex'>
                <div className='w-[50%]'>
                    {contentData.map((item, index) => (
                        <div key={index} className="mb-6">
                            <div className="text-[26px] text-[#290849] font-semibold">{item.title}</div>
                            <div className="text-[17px] text-[#000000]">{item.description}</div>
                        </div>
                    ))}
                </div>
                <div className='w-[50%]'>
                    <ImageComponent
                        src={objective}
                        alt="objective"
                        width={3000}
                        height={3000}
                    />
                </div>
            </div>
        </div>
    )
}

export default ObjectiveSection
