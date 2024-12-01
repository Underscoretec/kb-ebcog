import CommonLayout from '@/common/layouts/CommonLayout'
import ComingSoon from '@/components/ComingSoon/ComingSoon'
import React, { ReactElement } from 'react'

const PublicationPage = () => {
    return (
        <>
            <ComingSoon />
        </>
    )
}

export default PublicationPage



PublicationPage.getLayout = function getLayout(page: ReactElement) {
    return (
        <CommonLayout>
            {page}
        </CommonLayout>
    )
}