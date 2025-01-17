import InternationalFacultyCard from '@/components/HomeComponets/InternationalFacultyCard'
import React from 'react'
import router from 'next/router';

const InternationalFaculty = () => {

  const FacultyData = [
    {
      id: "p-0001GE",
      course: "Diploma in Gynaecology Endoscopy",
      facultyName: 'Dr. Alian Abdallah',
      courseDuration: '1 week',
      totalLearners: '70',
      facultyImage: '/if1.png',
      AboutLink: '#',
      flag:'ae'
    },
    {
      id: "p-0002MM",
      course: "Diploma in Maternal Medicine",
      facultyName: 'Dr. Amala Nazareth',
      courseDuration: '1 week',
      totalLearners: '70',
      facultyImage: '/if2.png',
      AboutLink: '#',
      flag:'ae'
    },
    {
      id: "p-0003REI",
      course: "Diploma in Reproductive Endocrinology & Infertility",
      facultyName: 'Dr. Anagha Karkhanis',
      courseDuration: '1 week',
      totalLearners: '70',
      facultyImage: '/if3.png',
      AboutLink: '#',
      flag:'in'
    },
    {
      id: "p-0004FMU",
      course: "Diploma in Fetal Medicine and Ultrasound",
      facultyName: 'Lead: Prof. Asma Khalil',
      courseDuration: '1 week',
      totalLearners: '70',
      facultyImage: '/if4.png',
      AboutLink: '#',
      flag:'gb'
    },
    {
      id: "p-0005RPI",
      course: "Diploma in Reproductive Endocrinology & Infertility",
      facultyName: 'Lead: Prof. Basil C. Tarlatzis',
      courseDuration: '1 week',
      totalLearners: '70',
      facultyImage: '/if5.png',
      AboutLink: '#',
      flag:'gr'
    },
    {
      id: "p-0006MM",
      course: "Diploma in Maternal Medicine",
      facultyName: 'Prof. Chittaranjan N. Purandare',
      courseDuration: '1 week',
      totalLearners: '70',
      facultyImage: '/if6.png',
      AboutLink: '#',
      flag:'in'
    },
    {
      id: "p-0007MM",
      course: "Diploma in Maternal Medicine",
      facultyName: 'Prof. Diogo Ayres de Campos',
      courseDuration: '1 week',
      totalLearners: '70',
      facultyImage: '/if7.png',
      AboutLink: '#',
      flag:'pt'
    },
    {
      id: "p-0008REI",
      course: "Diploma in Reproductive Endocrinology & Infertility",
      facultyName: 'Dr. Edgar Mocanu',
      courseDuration: '1 week',
      totalLearners: '70',
      facultyImage: '/if8.png',
      AboutLink: '#',
      flag:'ie'
    },
    {
      id: "p-0009MM",
      course: "Diploma in Maternal Medicine",
      facultyName: 'Lead: Prof. Frank Louwen',
      courseDuration: '1 week',
      totalLearners: '70',
      facultyImage: '/if9.png',
      AboutLink: '#',
      flag:'de'
    },
    {
      id: "p-0010GE",
      course: "Diploma in Gynaecology Endoscopy",
      facultyName: 'Lead: Dr. Helder Ferreira',
      courseDuration: '1 week',
      totalLearners: '70',
      facultyImage: '/if10.png',
      AboutLink: '#',
      flag:'pt'
    },
    {
      id: "p-0024GE",
      course: "Diploma in Gynaecology Endoscopy",
      facultyName: 'Dr. Hugo Rodrigues Gaspar',
      courseDuration: '1 week',
      totalLearners: '70',
      facultyImage: '/if24.png',
      AboutLink: '#',
      flag:'pt'
    },
    {
      id: "p-0011GE",
      course: "Diploma in Gynaecology Endoscopy",
      facultyName: 'Dr. Istvan Argay',
      courseDuration: '1 week',
      totalLearners: '70',
      facultyImage: '/if11.png',
      AboutLink: '#',
      flag:'hu'
    },
    {
      id: "p-0012FMU",
      course: "Diploma in Fetal Medicine and Ultrasound",
      facultyName: 'Prof. Justin Konje',
      courseDuration: '1 week',
      totalLearners: '70',
      facultyImage: '/if12.png',
      AboutLink: '#',
      flag:'qa'
    },
    {
      id: "p-0013FMU",
      course: "Diploma in Fetal Medicine and Ultrasound",
      facultyName: 'Prof. Karl Oliver Kagan',
      courseDuration: '1 week',
      totalLearners: '70',
      facultyImage: '/if13.png',
      AboutLink: '#',
      flag:'de'
    },
    {
      id: "p-0014REI",
      course: "Diploma in Reproductive Endocrinology & Infertility",
      facultyName: 'Dr. Karunakara Marikinti',
      courseDuration: '1 week',
      totalLearners: '70',
      facultyImage: '/if15.png',
      AboutLink: '#',
      flag:'ae'
    },
    {
      id: "p-0015MM",
      course: "Diploma in Maternal Medicine",
      facultyName: 'Dr. Komal Chavan',
      courseDuration: '1 week',
      totalLearners: '70',
      facultyImage: '/if14.png',
      AboutLink: '#',
      flag:'in'
    },
    {
      id: "p-0016GE",
      course: "Diploma in Gynaecology Endoscopy",
      facultyName: 'Prof. Munna Talak',
      courseDuration: '1 week',
      totalLearners: '70',
      facultyImage: '/if16.png',
      AboutLink: '#',
      flag:'ae'
    },
    {
      id: "p-0017REI",
      course: "Diploma in Reproductive Endocrinology & Infertility",
      facultyName: 'Dr. Rajalaxmi Walavalkar',
      courseDuration: '1 week',
      totalLearners: '70',
      facultyImage: '/if17.png',
      AboutLink: '#',
      flag:'in'
    },
    {
      id: "p-006FMU",
      course: "Diploma in Fetal Medicine and Ultrasound",
      facultyName: 'Prof. Samina Dornan',
      courseDuration: '1 week',
      totalLearners: '70',
      facultyImage: '/if22.png',
      AboutLink: '#',
      flag:'ae'
    },
    {
      id: "p-0021GE",
      course: "Diploma in Gynaecology Endoscopy",
      facultyName: 'Dr. Sandesh Kade',
      courseDuration: '1 week',
      totalLearners: '70',
      facultyImage: '/if20.png',
      AboutLink: '#',
      flag:'ae'
    },
    {
      id: "p-0022FMU",
      course: "Diploma in Fetal Medicine and Ultrasound",
      facultyName: 'Prof. Sebastian Kwiatkowski',
      courseDuration: '1 week',
      totalLearners: '70',
      facultyImage: '/if21.png',
      AboutLink: '#',
      flag:'pl'
    },
    {
      id: "p-0019MM",
      course: "Diploma in Maternal Medicine",
      facultyName: 'Prof. Stephen Rulisa',
      courseDuration: '1 week',
      totalLearners: '70',
      facultyImage: '/if18.png',
      AboutLink: '#',
      flag:'rw'
    },
    {
      id: "p-0020RFI",
      course: "Diploma in Reproductive Endocrinology & Infertility",
      facultyName: 'Prof. Stratics kolibianakis',
      courseDuration: '1 week',
      totalLearners: '70',
      facultyImage: '/if19.png',
      AboutLink: '#',
      flag:'gr'
    },
    {
      id: "p-0007FMU",
      course: "Diploma in Fetal Medicine and Ultrasound",
      facultyName: 'Prof. Ulrich Honemeyer',
      courseDuration: '1 week',
      totalLearners: '70',
      facultyImage: '/if23.png',
      AboutLink: '#',
      flag:'ae'
    },
  ]

  const handleClick = (id: string) => {
    router.push(`/${id}/?source=faculties`);
  };

  return (
    <div className='px-4 xs:px-8 xl:px-16 3xl:px-24 py-12 md:py-16'>
      <div className='text-[#290849] font-oswald text-[26px] sm:text-[30px] md:text-[36px] lg:text-[40px] 2xl:text-[55px] font-normal leading-[32px] sm:leading-[45px] 2xl:leading-[54px] mb-6 xs:mb-8 lg:mb-12'>EBCOG Diploma Faculties</div>
      <div className='flex flex-wrap gap-3 xs:gap-1 sm:gap-3 xl:gap-5'>
        {FacultyData.map((item, index) => {
          return (
            <div key={index} className='w-[100%] xs:w-[49%] sm:w-[48.5%] md:w-[32%] lg:w-[24%] xl:w-[23.5%] 3xl:w-[24%]'>
              <InternationalFacultyCard
                key={index}
                data={item}
                btn_label="Know More"
                handleClick={() => handleClick(item?.id)}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default InternationalFaculty