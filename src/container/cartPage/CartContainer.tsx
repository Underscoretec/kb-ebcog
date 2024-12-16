import BreadCrumbs from '@/common/uicomponents/BreadCrumbs'
import Cart from '@/components/CartComponents/Cart'
import React from 'react'

const CartContainer = () => {
  return (
    <div className='min-h-[70rem]'>
        <BreadCrumbs routes={[{ name: 'Cart', href:'/cart', current: true }]} />
        <Cart />
    </div>
  )
}

export default CartContainer