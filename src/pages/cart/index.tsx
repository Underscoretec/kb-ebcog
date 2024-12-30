import CommonLayout from '@/common/layouts/CommonLayout'
import CartContainer from '@/container/cartPage/CartContainer'
import { useRouteProtection } from '@/utils/pathChecker';
import React, { ReactElement } from 'react'

const CartPage = () => {
    useRouteProtection();
    return (
        <>
            <CartContainer />
        </>
    )
}

export default CartPage


CartPage.getLayout = function getLayout(page: ReactElement) {
    return (
        <CommonLayout>
            {page}
        </CommonLayout>
    )
}