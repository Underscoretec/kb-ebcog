import CommonLayout from '@/common/layouts/CommonLayout'
import React, { ReactElement } from 'react'
import { useRouter } from 'next/router';
import DiplomaCourse from '@/container/diplomaCourse/DiplomaCourse';

const CoursePage = () => {
    const router = useRouter();
    const { id } = router.query;

    const courseDetails = [
        {
            id:'maternal-medical',
            name:"Diploma in Maternal Medicine",
            duration:'1 Weeks',
            learner:'15674',
            lessons:'20',
            about:[
                {
                    id:'overview',
                    title:'Overview',
                    
                }
            ]
        },
        {
            id:'reproductive-endocrinology',
            name:"Diploma in Reproductive Endocrinology & Infertility"
        },
        {
            id:'gynaecology-endoscopy',
            name:"Diploma in Gynaecology Endoscopy"
        },
        {
            id:'fetal-medicine-and-ultrasound',
            name:"Diploma in Fetal Medicine and Ultrasound"
        },
    ]

    return (
        <>
            <DiplomaCourse />
            {id}
        </>
    )
}

export default CoursePage


CoursePage.getLayout = function getLayout(page: ReactElement) {
    return (
        <CommonLayout>
            {page}
        </CommonLayout>
    )
}
