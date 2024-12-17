import CommonLayout from '@/common/layouts/CommonLayout'
import TermsOfService from '@/container/tac/TermsOfService'
import React, { ReactElement } from 'react'

const TermsAndConditionPage = () => {
    return (
        <TermsOfService/>
    )
}

export default TermsAndConditionPage




TermsAndConditionPage.getLayout = function getLayout(page: ReactElement) {
    return (
        <CommonLayout>
            {page}
        </CommonLayout>
    )
}