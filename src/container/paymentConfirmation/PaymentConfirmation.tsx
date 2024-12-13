import CartTabs from '@/components/CartComponents/CartTabs';
import Confirmation from '@/components/CartComponents/Confirmation';
import React, { useState } from 'react';

const PaymentConfirmation = () => {

    const steps = [
        {
            id: 1,
            name: 'CART',
            description: 'Manage Your Items List',
            status: 'complete',
        },
        {
            id: 2,
            name: 'SHIPPING AND CHECKOUT',
            description: 'Checkout Your Items List',
            status: 'complete',
        },
        {
            id: 3,
            name: 'CONFIRMATION',
            description: 'Review And Submit Your Order',
            status: 'complete',
        },
    ];


    return (
        <div className="py-2">
            <h1 className="font-montserrat text-[35px] font-bold leading-[42.67px] py-6 px-4 xs:px-8 xl:px-16 3xl:px-24 pt-4">
                ORDER RECEIVED
            </h1>
            <CartTabs steps={steps} />
            <div className="py-10 px-4 xs:px-8 xl:px-16 3xl:px-24">
                <Confirmation />
            </div>
        </div>
    );
};

export default PaymentConfirmation;
