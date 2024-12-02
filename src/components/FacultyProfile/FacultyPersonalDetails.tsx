// import ImageComponent from '@/common/uicomponents/ImageComponent'
// import React from 'react'
// import logo1 from "../../../public/p-logo1.png"
// import logo from "../../../public/logo.png"
// import logo3 from "../../../public/logo3.png"
// import logo4 from "../../../public/logo4.png"

// const FacultyPersonalDetails = () => {
//     return (
//         <div>
//             <div className='flex flex-col gap-6 border-b border-[#E5E7EB] pb-8'>
//                 <h2 className='text-[#290849] font-montserrat text-[19px] font-bold leading-[28.5px] pb-2'>Designation</h2>
//                 <div className='flex gap-4'>
//                     <ImageComponent
//                         src={logo1}
//                         alt="logo"
//                         className="h-[40px] w-[40px]"
//                         width={500}
//                         height={500}
//                     />
//                     <div className='w-[72%]'>
//                         <div className='font-montserrat text-[16px] font-semibold leading-[20px]'>President-Elect</div>
//                         <div className='text-[#555555] font-montserrat text-[16px] font-normal leading-[24px]'>International Federation of Gynecology and Obstetrics (FIGO)</div>
//                     </div>
//                 </div>
//                 <div className='flex gap-4'>
//                     <ImageComponent
//                         src={logo}
//                         alt="logo"
//                         className="h-[40px] w-[40px]"
//                         width={500}
//                         height={500}
//                     />
//                     <div className='w-[72%]'>
//                         <div className='font-montserrat text-[16px] font-semibold leading-[20px]'>President</div>
//                         <div className='text-[#555555] font-montserrat text-[16px] font-normal leading-[24px]'>European Board and College of Obstetrics and Gynecology (EBCOG)</div>
//                     </div>
//                 </div>
//             </div>

//             <div className='flex flex-col gap-6 py-8 border-b border-[#E5E7EB]'>
//                 <h2 className='text-[#290849] font-montserrat text-[19px] font-bold leading-[28.5px] pb-2'>Academic Background</h2>
//                 <div className='flex gap-4'>
//                     <ImageComponent
//                         src={logo3}
//                         alt="logo"
//                         className="h-[40px] w-[40px]"
//                         width={500}
//                         height={500}
//                     />
//                     <div className='w-[72%]'>
//                         <div className='font-montserrat text-[16px] font-semibold leading-[20px]'>Medical Degree</div>
//                         <div className='text-[#555555] font-montserrat text-[16px] font-normal leading-[24px]'>University of Münster, Germany</div>
//                     </div>
//                 </div>
//                 <div className='flex gap-4'>
//                     <ImageComponent
//                         src={logo4}
//                         alt="logo"
//                         className="h-[40px] w-[40px]"
//                         width={500}
//                         height={500}
//                     />
//                     <div className='w-[72%]'>
//                         <div className='font-montserrat text-[16px] font-semibold leading-[20px]'>Doctorate (1993)</div>
//                         <div className='text-[#555555] font-montserrat text-[16px] font-normal leading-[24px]'> Thesis on the definition criteria of HELLP syndrome</div>
//                     </div>
//                 </div>
//             </div>

//             <div className='flex flex-col gap-6 py-8'>
//                 <h2 className='text-[#290849] font-montserrat text-[19px] font-bold leading-[28.5px] pb-2'>Why Train Under Professor Frank Louwen?</h2>
//                 <div className='flex flex-col gap-2'>
//                     <div className='font-montserrat text-[15px] xs:text-[17px] xl:text-[18px] font-semibold leading-[22px] xs:leading-[27px]'>
//                         Leadership Experience:
//                     </div>
//                     <ul className='text-[#555555] font-montserrat text-[15px] xs:text-[16px] xl:text-[17px] font-normal leading-[27px] list-disc pl-5'>
//                         <li> Extensive involvement in international and national professional societies</li>
//                         <li>12 years on the board of the German Society of Obstetrics and Gynecology (DGGG)</li>
//                     </ul>
//                 </div>
//                 <div className='flex flex-col gap-2'>
//                     <div className='font-montserrat text-[15px] xs:text-[17px] xl:text-[18px] font-semibold leading-[22px] xs:leading-[27px]'>
//                         Advocacy and Service:
//                     </div>
//                     <ul className='text-[#555555] font-montserrat text-[15px] xs:text-[16px] xl:text-[17px] font-normal leading-[27px] list-disc pl-5'>
//                         <li> Chairman of the Board, German Foundation for Women's Health</li>
//                         <li>Chairman of the Board, Pro Familia Hessen</li>
//                     </ul>
//                 </div>
//                 <div className='flex flex-col gap-2'>
//                     <div className='font-montserrat text-[15px] xs:text-[17px] xl:text-[18px] font-semibold leading-[22px] xs:leading-[27px]'>
//                         Innovative Initiatives:
//                     </div>
//                     <ul className='text-[#555555] font-montserrat text-[15px] xs:text-[16px] xl:text-[17px] font-normal leading-[27px] list-disc pl-5'>
//                         <li> Development of programs like "Teach the Breech" to improve clinical practices</li>
//                     </ul>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default FacultyPersonalDetails




import React from "react";
import ImageComponent from "@/common/uicomponents/ImageComponent";



const FacultyPersonalDetails = ({data}:any) => {
    return (
        <div className="px-4 md:px-8">
            {data?.map((section:any, sectionIndex:any) => (
                <div
                    key={sectionIndex}
                    className={`flex flex-col gap-6 ${sectionIndex < data.length - 1 ? "border-b border-[#E5E7EB] py-8" : "py-8"
                        }`}
                >
                    <h2 className="text-[#290849] font-montserrat text-[19px] font-bold leading-[28.5px] pb-2">
                        {section.title}
                    </h2>
                    {section.items.map((item:any, itemIndex:any) => (
                        <div key={itemIndex} className="flex gap-4">
                            {item.logo && (
                                <ImageComponent
                                    src={item.logo}
                                    alt="logo"
                                    className="h-[40px] w-[40px]"
                                    width={500}
                                    height={500}
                                />
                            )}
                            <div className="w-[72%]">
                                <div className="font-montserrat text-[16px] font-semibold leading-[20px] pb-1">
                                    {item.title}
                                </div>
                                {Array.isArray(item.description) ? (
                                    <ul className="text-[#555555] font-montserrat text-[16px] font-normal leading-[24px] list-disc pl-5 pt-1">
                                        {item.description.map((desc:any, descIndex:any) => (
                                            <li key={descIndex}>{desc}</li>
                                        ))}
                                    </ul>
                                ) : (
                                    <div className="text-[#555555] font-montserrat text-[16px] font-normal leading-[24px]">
                                        {item.description}
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default FacultyPersonalDetails;
