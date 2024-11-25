import InternationalFacultyCard from '@/components/HomeComponets/InternationalFacultyCard'
import React from 'react'

const InternationalFaculty = () => {

  const FacultyData = [
    {
      id: 0,
      course: "Diploma in Maternal Medicine",
      facultyName: 'Dr. Komal Chavan',
      courseDuration: '1 week',
      totalLearners: '15,674',
      facultyImage:'/i1.png',
      AboutLink: '#'
    },
    {
      id: 1,
      course: "Diploma in Gynaecology Endoscopy",
      facultyName: 'Dr. Komal Chavan',
      courseDuration: '1 week',
      totalLearners: '15,674',
      facultyImage:'/i2.png',
      AboutLink: '#'
    },
    {
      id: 2,
      course: "Diploma in Fetal Medicine and Ultrasound",
      facultyName: 'Dr. Komal Chavan',
      courseDuration: '1 week',
      totalLearners: '15,674',
      facultyImage:'/i3.png',
      AboutLink: '#'
    },
    {
      id: 3,
      course: "Diploma in Reproductive Endocrinology & Infertility",
      facultyName: 'Prof. Basil C. Tarlatzis (Lead)',
      courseDuration: '1 week',
      totalLearners: '15,674',
      facultyImage:'/i4.png',
      AboutLink: '#'
    },
    {
      id: 4,
      course: "Diploma in Maternal Medicine",
      facultyName: 'Prof. Chittaranjan N. Purandare',
      courseDuration: '1 week',
      totalLearners: '15,674',
      facultyImage:'/i5.png',
      AboutLink: '#'
    },
    {
      id: 5,
      course: "Diploma in Maternal Medicine",
      facultyName: 'Prof. Diogo Ayres de Campos',
      courseDuration: '1 week',
      totalLearners: '15,674',
      facultyImage:'/i6.png',
      AboutLink: '#'
    },
    {
      id: 8,
      course: "Diploma in Reproductive Endocrinology & Infertility",
      facultyName: 'Dr. Edgar Mocanu',
      courseDuration: '1 week',
      totalLearners: '15,674',
      facultyImage:'/i7.png',
      AboutLink: '#'
    },
    {
      id: 9,
      course: "Diploma in Maternal Medicine",
      facultyName: 'Prof. Frank Louwen (Lead)',
      courseDuration: '1 week',
      totalLearners: '15,674',
      facultyImage:'/i8.png',
      AboutLink: '#'
    },
    {
      id: 10,
      course: "Diploma in Gynaecology Endoscopy",
      facultyName: 'Dr. Helder Ferreira',
      courseDuration: '1 week',
      totalLearners: '15,674',
      facultyImage:'/i9.png',
      AboutLink: '#'
    },
    {
      id: 11,
      course: "Diploma in Gynaecology Endoscopy",
      facultyName: 'Dr. Istvan Argay',
      courseDuration: '1 week',
      totalLearners: '15,674',
      facultyImage:'/i10.png',
      AboutLink: '#'
    },
    {
      id: 12,
      course: "Diploma in Fetal Medicine and Ultrasound",
      facultyName: 'Prof. Justin Konje',
      courseDuration: '1 week',
      totalLearners: '15,674',
      facultyImage:'/i11.png',
      AboutLink: '#'
    },
    {
      id: 13,
      course: "Diploma in Fetal Medicine and Ultrasound",
      facultyName: 'Prof. Karl Oliver Kagan',
      courseDuration: '1 week',
      totalLearners: '15,674',
      facultyImage:'/i12.png',
      AboutLink: '#'
    },
    {
      id: 14,
      course: "Diploma in Maternal Medicine",
      facultyName: 'Dr. Komal Chavan',
      courseDuration: '1 week',
      totalLearners: '15,674',
      facultyImage:'/i13.png',
      AboutLink: '#'
    },
    {
      id: 15,
      course: "Diploma in Reproductive Endocrinology & Infertility",
      facultyName: 'Dr. Karunakara Marikinti',
      courseDuration: '1 week',
      totalLearners: '15,674',
      facultyImage:'/i14.png',
      AboutLink: '#'
    },
    {
      id: 16,
      course: "Diploma in Gynaecology Endoscopy",
      facultyName: 'Prof. Munna Talak',
      courseDuration: '1 week',
      totalLearners: '15,674',
      facultyImage:'/i15.png',
      AboutLink: '#'
    },
    {
      id: 17,
      course: "Diploma in Reproductive Endocrinology & Infertility",
      facultyName: 'Dr. Rajalaxmi Walavalkar',
      courseDuration: '1 week',
      totalLearners: '154',
      facultyImage:'/i16.png',
      AboutLink: '#'
    },
    {
      id: 19,
      course: "Diploma in Maternal Medicine",
      facultyName: 'Prof. Stephen Rulisa',
      courseDuration: '1 week',
      totalLearners: '15,674',
      facultyImage:'/i17.png',
      AboutLink: '#'
    },
    {
      id: 20,
      course: "Diploma in Reproductive Endocrinology & Infertility",
      facultyName: 'Prof. Stratics kolibianakis',
      courseDuration: '1 week',
      totalLearners: '15,674',
      facultyImage:'/i18.png',
      AboutLink: '#'
    },
    {
      id: 21,
      course: "Diploma in Gynaecology Endoscopy",
      facultyName: 'Dr. Sandesh Khade',
      courseDuration: '1 week',
      totalLearners: '15,674',
      facultyImage:'/i19.png',
      AboutLink: '#'
    },
    {
      id: 22,
      course: "Diploma in Fetal Medicine and Ultrasound",
      facultyName: 'Prof. Sebastian Kwiatkowski',
      courseDuration: '1 week',
      totalLearners: '15,674',
      facultyImage:'/i20.png',
      AboutLink: '#'
    },
    {
      id: 6,
      course: "Diploma in Fetal Medicine and Ultrasound",
      facultyName: 'Prof. Samina Dornan',
      courseDuration: '1 week',
      totalLearners: '156',
      facultyImage:'/i21.png',
      AboutLink: '#'
    },
    {
      id: 7,
      course: "Diploma in Fetal Medicine and Ultrasound",
      facultyName: 'Prof. Ulrich Honemeyer',
      courseDuration: '1 week',
      totalLearners: '156',
      facultyImage:'/i22.png',
      AboutLink: '#'
    },
  ]

  return (
    <div className='px-4 xs:px-8 xl:px-16 3xl:px-24 py-12 md:py-16'>
      <div className='text-[#290849] font-oswald text-[26px] sm:text-[30px] md:text-[36px] lg:text-[40px] 2xl:text-[55px] font-normal leading-[32px] sm:leading-[45px] 2xl:leading-[54px] mb-6 xs:mb-8 lg:mb-12'>Popular International and EBCOG Diploma Faculty</div>
      <div className='flex flex-wrap gap-3 xs:gap-1 sm:gap-3 xl:gap-5'>
        {FacultyData.map((item,index)=>{
          return(
            <InternationalFacultyCard key={index} data={item}/>
          )
        })}
      </div>
    </div>
  )
}

export default InternationalFaculty