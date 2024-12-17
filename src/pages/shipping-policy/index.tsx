import CommonLayout from '@/common/layouts/CommonLayout'
import ShippingPolicy from '@/container/shippingPolicy/ShippingPolicy'
import React, { ReactElement } from 'react'

const ShippingPolicyPage = () => {
    return (
        <ShippingPolicy/>
    )
}

export default ShippingPolicyPage




ShippingPolicyPage.getLayout = function getLayout(page: ReactElement) {
    return (
        <CommonLayout>
            {page}
        </CommonLayout>
    )
}