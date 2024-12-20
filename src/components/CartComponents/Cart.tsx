import React, { useEffect, useState } from 'react';
import CartTabs from './CartTabs';
import CartInfo from './CartInfo';
import CartCheckout from './CartCheckout';
import Confirmation from './Confirmation';
import useCartHooks from '@/hooks/useCartHooks';
import { CircularProgress } from '@mui/material';

const Cart = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const {loading, getCartItems, removeToCart} = useCartHooks();
    const [cartItems, setCartItems] = useState<any[]>([]);

    const steps = [
        {
            id: 1,
            name: 'CART',
            description: 'Manage Your Items List',
            status: currentStep === 1 ? 'current' : currentStep > 1 ? 'complete' : 'upcoming',
        },
        {
            id: 2,
            name: 'SHIPPING AND CHECKOUT',
            description: 'Checkout Your Items List',
            status: currentStep === 2 ? 'current' : currentStep > 2 ? 'complete' : 'upcoming',
        },
        {
            id: 3,
            name: 'CONFIRMATION',
            description: 'Review And Submit Your Order',
            status: currentStep === 3 ? 'current' : 'upcoming',
        },
    ];

    useEffect(()=>{
        fetchCart()
    },[])

    const fetchCart = async () =>{
        const result = await getCartItems()
        setCartItems(result)
    }

    const handleRemoveItem = async (id:any) =>{
        await removeToCart(id);
        fetchCart();
    }

    const renderStepContent = () => {
        switch (currentStep) {
            case 1:
                return <CartInfo setCurrentStep={setCurrentStep} cartItems={cartItems} handleRemoveItem={handleRemoveItem}/>;
            case 2:
                return <CartCheckout cartItems={cartItems}/>;
            case 3:
                return <Confirmation />;
            default:
                return null;
        }
    };

    if(loading) return <div className='min-h-[50rem] flex justify-center items-center'><CircularProgress style={{ color: '#E4087F' }} /></div>

    if(cartItems.length === 0 && !loading) return <div className='py-10 px-4 xs:px-8 xl:px-16 3xl:px-24 min-h-[30rem] font-montserrat text-[28px]'>Your cart is empty!</div>

    return (
        <div className="py-2">
            <h1 className="font-montserrat text-[35px] font-bold leading-[42.67px] py-6 px-4 xs:px-8 xl:px-16 3xl:px-24">
                Cart
            </h1>
            <CartTabs steps={steps} />
            <div className="py-10 px-4 xs:px-8 xl:px-16 3xl:px-24">
                {renderStepContent()}
            </div>
        </div>
    );
};

export default Cart;
