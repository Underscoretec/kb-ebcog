import CommonLayout from '@/common/layouts/CommonLayout'
import React, { ReactElement } from 'react'
import { useRouter } from 'next/router';
import DiplomaCourse from '@/container/diplomaCourse/DiplomaCourse';

const CoursePage = () => {
    const router = useRouter();
    
    const { id } = router.query;
    const courseId = typeof id === 'string' ? id : '';
    
    return (
        <>
            <DiplomaCourse courseId={courseId} />
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
