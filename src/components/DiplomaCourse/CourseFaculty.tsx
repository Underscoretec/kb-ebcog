import React from 'react'
import Button from '@/common/uicomponents/Button'
import ImageComponent from '@/common/uicomponents/ImageComponent'

// const facultyData = [
//   {
//     "name": "Prof. Frank Louwen",
//     "role": "Lead",
//     "description": "Head of the Division of Obstetrics and Fetomaternal Medicine at the University Hospital Frankfurt, Goethe University. President of EBCOG & President-Elect FIGO",
//     "image": "/faculty1.png"
//   },
//   {
//     "name": "Prof. Diogo Ayres de Campos",
//     "description": "Chair of the Department of Obstetrics and Gynecology at the Medical School of the University of Lisbon, Portugal. He leads the Department of Obstetrics and Gynecology at Santa Maria University Hospital in Lisbon. Co-invented the 'Omniview -SisPorto®' and has served as President of the EAPM and as an Executive Committee Member of the EBCOG",
//     "image": "/faculty2.png"
//   },
//   {
//     "name": "Prof. Chittaranjan N. Purandare",
//     "description": "Purandare Hospital. Served as the President of FIGO and FOGSI. Also been the Dean of the ICOG and the Emeritus Editor for the Journal of Obstetrics and Gynecology of India.",
//     "image": "/faculty3.png"
//   },
//   {
//     "name": "Prof. Stephen Rulisa",
//     "description": "Professor in the Department of Obstetrics and Gynecology at the University of Rwanda. Serving as the Chair of the ECSACOG & National Chair of the MPDSR",
//     "image": "/faculty4.png"
//   },
//   {
//     "name": "Dr. Amala Nazareth",
//     "description": "Hon. Secretary General AFCOG. Obstetrician and Gynecologist at Prime Health Group, UAE",
//     "image": "/faculty5.png"
//   },
//   {
//     "name": "Dr. Komal Chavan",
//     "description": "Head of the Division of Obstetrics and Fetomaternal Medicine at the University Hospital Frankfurt, Goethe University. President of EBCOG & President-Elect FIGO",
//     "image": "/faculty6.png"
//   }
// ]

const CourseFaculty = ({data}:any) => {
  return (
    <div className='flex flex-col gap-12'>
      {data?.map((faculty:any, index:any) => (
        <div key={index} className='flex gap-4 xl:gap-6'>
          <div className="w-[10%] xl:w-[8%]">
            <ImageComponent
              src={faculty?.image}
              alt="faculty image"
              className="h-auto w-full border-2 border-[#E4087F] rounded-[12px]"
              width={1000}
              height={1000}
            />
          </div>
          <div className="w-[90%]">
            <h3 className="font-montserrat text-[18px] xl:text-[20px] font-semibold leading-[24px]">
              {faculty?.name} {faculty.role && `(${faculty?.role})`}
            </h3>
            <p className="text-[#555555] font-montserrat text-[16px] xl:text-[18px] font-normal leading-[27px] my-2 xl:my-3">
              {faculty?.description}
            </p>
            <Button
              label='Know More'
              className="py-2 px-4 bg-[#E4087F] font-poppins text-sm font-medium leading-4 text-white rounded-[6px] border border-transparent transition-all duration-400 ease-in-out hover:border-[#E4087F] hover:bg-white hover:text-[#E4087F]"
            />
          </div>
        </div>
      ))}
    </div>
  )
}

export default CourseFaculty
