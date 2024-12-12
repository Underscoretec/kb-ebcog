import React from 'react'
import CartTabs from './CartTabs'
import CartInfo from './CartInfo'

const Cart = () => {

    const steps = [
        { id: '01', name: 'CART', description: 'Manage Your Items List', href: '#', status: 'current' },
        { id: '02', name: 'SHIPPING AND CHECKOUT', description: 'Checkout Your Items List', href: '#', status: 'upcoming' },
        { id: '03', name: 'CONFIRMATION', description: 'Review And Submit Your Order', href: '#', status: 'complete' },
    ]

    return (
        <div className='py-2'>
            <h1 className='font-montserrat text-[35px] font-bold leading-[42.67px] py-6 px-4 xs:px-8 xl:px-16 3xl:px-24'>Cart</h1>
            <CartTabs steps={steps}/>
            <div className='py-10 px-4 xs:px-8 xl:px-16 3xl:px-24 '>
                <CartInfo/>
            </div>
        </div>
    )
}

export default Cart