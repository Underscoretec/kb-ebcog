import ImageComponent from '@/common/uicomponents/ImageComponent'
import React from 'react'
import about from '../../../public/pre-about.png'
import Button from '@/common/uicomponents/Button'
import Link from 'next/link'

const AboutSection = () => {
    return (
        <div className='lg:flex bg-[#FFF4F8]'>
            <div className='w-full lg:w-[58%]'>
                <ImageComponent
                    src={about}
                    alt="about"
                    width={800}
                    height={800}
                    className='w-full h-auto'
                />
            </div>

            <div className='w-full lg:w-[42%] px-5 sm:px-10 lg:px-5 flex flex-col justify-center py-8 lg:py-8 xl:py-16'>
                <div id='ebcog'>
                    <div className='text-[22px] xs:text-[42px] sm:text-[45px] md:text-[55px] lg:text-[35px] xl:text-[45px] 2xl:text-[55px] font-oswald text-[#290849]'>About <span className='text-[#E4087F]'>EBCOG</span></div>
                    <div className='text-[22px] xs:text-[42px] sm:text-[45px] md:text-[55px] lg:text-[35px] xl:text-[45px] 2xl:text-[55px] pr-5 font-oswald text-[#290849]'>{`(European Board & College of Obstetrics and Gynaecology)`}</div>
                    <div className='text-[15px] sm:text-[15px] md:text-[20px] lg:text-[15px] xl:text-[18px] 2xl:text-[20px] font-oswald text-[#000000] leading-[25px] 2xl:leading-[32px] w-full lg:w-[98%] xl:w-[90%] 2xl:w-[90%]'>{`"EBCOG is the Board and College of the Section of Gynaecology and Obstetrics of the Union Européenne des Médecins
                    Spécialistes (UEMS), representing 37 European national societies in Obstetrics and Gynaecology. The aim of EBCOG
                    is to improve the health of women, as well as unborn and newborn babies, by promoting the highest possible standards
                    of care. EBCOG works closely with subspecialist societies like ESHRE, EAPM, EUGA & ESGO. European network of trainees (ENTOG) collaborates with EBCOG in curriculum development and recognition of training centres"`}</div>
                </div>

                <div id='ebcog'>
                    <div className='mt-4 lg:mt-3 xl:mt-4 2xl:mt-8 text-[22px] xs:text-[42px] sm:text-[42px] md:text-[42px] lg:text-[32px] xl:text-[42px] 2xl:text-[42px] font-oswald text-[#290849]'>About <span className='text-[#E4087F]'>KnowledgeBridge International</span></div>

                    <div className='mt-2 lg:mt-2 xl:mt-3 2xl:mt-8 text-[15px] sm:text-[15px] md:text-[20px] lg:text-[15px] xl:text-[18px] 2xl:text-[20px] font-oswald text-[#000000] leading-[25px] 2xl:leading-[32px] w-full lg:w-[98%] xl:w-[90%] 2xl:w-[90%]'>
                        {`KnowledgeBridge International is a knowledge company in the medical space; knowledge is accessed and engaged across specialities, we are bridging fragmented silos to empower individuals and businesses.`}
                    </div>

                    <div className='mt-4 lg:mt-3 xl:mt-4 2xl:mt-8 text-[15px] sm:text-[15px] md:text-[20px] lg:text-[15px] xl:text-[18px] 2xl:text-[20px] font-oswald text-[#000000] leading-[25px] 2xl:leading-[32px] w-full lg:w-[98%] xl:w-[90%] 2xl:w-[90%]'>
                        {`We specialize in Knowledge Stack Solutions for publishers, healthcare, academia, and beyond, our "Tecknowledge" philosophy integrates technology with expertly curated content across medical specialities.`}
                    </div>

                    <div className='mt-4 lg:mt-3 xl:mt-4 2xl:mt-8 text-[15px] sm:text-[15px] md:text-[20px] lg:text-[15px] xl:text-[18px] 2xl:text-[20px] font-oswald text-[#000000] leading-[25px] 2xl:leading-[32px] w-full lg:w-[98%] xl:w-[90%] 2xl:w-[90%]'>
                        {`We excel in publishing, content aggregation, knowledge engagement, specialized courses, hands-on training, and customized learning pathways. By collaborating with global medical experts and utilizing hybrid learning models, we deliver 
                        innovative solutions that prioritize user experience, transforming knowledge delivery and engagement for a more empowered future and better outcomes for healthcare professionals.`}
                    </div>
                </div>

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
