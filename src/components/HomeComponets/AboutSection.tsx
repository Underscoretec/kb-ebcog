import ImageComponent from '@/common/uicomponents/ImageComponent'
import React from 'react'
import about from '../../../public/about.png'
import Button from '@/common/uicomponents/Button'
import Link from 'next/link'

const AboutSection = () => {
    return (
        <div id='ebcog' className='lg:flex bg-[#FFF4F8]'>
            <div className='w-full lg:w-[58%]'>
                <ImageComponent
                    src={about}
                    alt="about"
                    width={3000}
                    height={3000}
                />
            </div>

            <div className='w-full lg:w-[42%] px-5 sm:px-10 lg:px-5 flex flex-col justify-center py-8 lg:py-8 xl:py-16'>
                <div className='text-[22px] xs:text-[42px] sm:text-[45px] md:text-[55px] lg:text-[35px] xl:text-[45px] 2xl:text-[55px] font-oswald text-[#290849]'>About <span className='text-[#E4087F]'>EBCOG</span></div>
                <div className='text-[22px] xs:text-[42px] sm:text-[45px] md:text-[55px] lg:text-[35px] xl:text-[45px] 2xl:text-[55px] pr-5 font-oswald text-[#290849]'>{`(European Board & College of Obstetrics and Gynaecology)`}</div>
                <div className='text-[15px] sm:text-[15px] md:text-[20px] lg:text-[15px] xl:text-[18px] 2xl:text-[20px] font-oswald text-[#000000] leading-[25px] 2xl:leading-[32px] w-full lg:w-[98%] xl:w-[90%] 2xl:w-[90%]'>{`"EBCOG is the Board and College of the Section of Gynaecology and Obstetrics of the Union Européenne des Médecins
                    Spécialistes (UEMS), representing 37 European national societies in Obstetrics and Gynaecology. The aim of EBCOG
                    is to improve the health of women, as well as unborn and newborn babies,by promoting the highest possible standards
                    of care. EBCOG's core activities focus on education and training, working collaboratively with subspecialties,
                    special interest societies, trainees, and European interest groups to achieve these goals. EBCOG also works closely
                    with the European trainees' organization, ENTOG, to offer fellowships together annually."`}</div>

                <div className='pt-8 xl:pt-5 2xl:pt-10'>
                    <Link href='/registration'>
                        <Button label='Join Now' className='bg-[#E4087F] rounded-md flex justify-center px-2 xs:px-5 py-2 text-[#FFFFFF] w-[40%] xs:w-[30%] hover:bg-[#ac0660]' />
                    </Link>

                </div>
            </div>
        </div>
    )
}

export default AboutSection
