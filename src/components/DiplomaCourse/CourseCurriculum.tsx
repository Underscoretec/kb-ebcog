import React from 'react';

// Sample data from the JSON
const curriculumData = {
  curriculumSections: [
    {
      title: "Labor and Delivery",
      items: [
        "Advanced Delivery Techniques",
        "Innovative Tools",
        "Surgical Skills"
      ]
    },
    {
      title: "Medical Disorders in Pregnancy",
      items: [
        "Comprehensive Patient Care",
        "Neurological and Respiratory Considerations",
        "Postpartum Management"
      ]
    },
    {
      title: "Special / High-Risk Conditions in Pregnancy",
      items: [
        "Fetal Care",
        "Pregnancy Complications",
        "Nutritional and Metabolic Health"
      ]
    },
    {
      title: "Critical Care in Obstetrics",
      items: [
        "Emergency Management",
        "Severe Complications"
      ]
    },
    {
      title: "Workstations / Hands-on Training",
      items: [
        "Practical Skills Development",
        "Innovative Tools",
        "Real-World Application"
      ]
    }
  ]
};

const CourseCurriculum = ({data}:any) => {
  return (
    <div className='flex flex-col gap-8'>
      {data.curriculumSections.map((section:any, index:any) => (
        <div key={index}>
          <div className='font-montserrat text-[15px] xs:text-[17px] xl:text-[18px] font-semibold leading-[22px] xs:leading-[27px]'>
            {section.title}
          </div>
          <ul className='text-[#555555] font-montserrat text-[15px] xs:text-[16px] xl:text-[17px] font-normal leading-[27px] list-disc pl-5'>
            {section.items.map((item:any, itemIndex:any) => (
              <li key={itemIndex}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default CourseCurriculum;
