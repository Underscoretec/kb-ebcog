import BreadCrumbs from '@/common/uicomponents/BreadCrumbs'
import MeetUsCard from '@/components/MeetUsCard/MeetUsCard'
import React from 'react'

const MeetUs = () => {

    const cardData = [
        {
            id: '0',
            image: '/Frame1.png',
            title: '67th All India Congress of Obstetrics and Gynaecology 2025​',
            location: 'Mumbai',
            time: '8 - 12 January, 2025',
            link:'https://aicogmumbai2025.com/'
        },
        {
            id: '1',
            image: '/Frame2.png',
            title: 'EBCOG’s European Congress of Obstetrics and Gynaecology',
            location: 'Frankfurt',
            time: '5 - 7 June, 2025',
            link:'https://www.ebcog-congress.eu/'
        },
        {
            id: '2',
            image: '/Frame3.png',
            title: 'XXV FIGO World Congress of Gynecology and Obstetrics',
            location: 'Cape Town',
            time: '5 - 9 October, 2025',
            link:'https://figo2025.org/  '
        },
    ]
    return (
        <>
            <BreadCrumbs routes={[{ name: 'Meet Us in Person', href: '/meet-us-in-person', current: true }]} />
            <div className='min-h-[40rem] bg-[#FFF4F8] px-4 xs:px-8 xl:px-16 3xl:px-24 py-6 sm:py-8 lg:py-12'>
                <div className='font-oswald text-[18px] font-medium leading-[20px] tracking-[0.04em]'>Meet Us in Person</div>
                <h1 className='font-oswald text-[30px] xs:text-[35px] md:text-[40px] xl:text-[55px] font-normal leading-[32px] xs:leading-[36px] md:leading-[54px] mb-8'>Upcoming Events</h1>
                <div className='flex flex-col gap-6 xl:gap-10'>
                    {cardData.map((item,index)=>{
                        return(<MeetUsCard key={index} data={item} />)
                    })}
                </div>
                
            </div>
        </>
    )
}

export default MeetUs