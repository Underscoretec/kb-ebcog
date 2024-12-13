import React, { useEffect } from 'react'
import CartProductCart from './CartProductCart'
import Button from '@/common/uicomponents/Button'
import { loadRazorpay, rzpCheckoutFrom } from '@/utils/rzpCheckoutForm'
import Router from "next/router";

const CartInfo = ({setCurrentStep}:any) => {

    const products = [
        {
            id:'Course01',
            image:'/p1.png',
            coursename:'Diploma in Fetal Medicine and Ultrasound',
            by:'Determined-Poitras',
            duration:'2 Weeks',
            TotalLearners:'15,674',
            totalAmount:'$399.00',
            subAmount:'$399.00'
        },
    ]

    const handleProceedToCheckout = async (values:any) => {
        setCurrentStep(2);
        if (process.env.NEXT_PUBLIC_PAYMENT_GATEWAY === 'razorpay') {
            const paymentData = await rzpCheckoutFrom({
              amount: values*100,
              redirectUrl: "/confirmation",
              router: Router,
            })
            console.log(paymentData, "paymentData 001")
          }
      };

      useEffect(()=>{
        loadRazorpay();
      },[])

  return (
    <div className='flex gap-4 justify-between'>
        <div className='w-[75%]'>
            <div className='flex font-montserrat text-[14px] font-semibold leading-[24px] gap-4 px-4'>
                <div className='w-[70%]'>PRODUCT</div>
                <div className='w-[12%]'>PRICE</div>
                <div className='w-[13%]'>SUBTOTAL</div>
            </div>
            {
                products.map((item: any,index: any)=>{
                    return( <CartProductCart key={index} data={item}/>)
                })
            }
        </div>
        <div className='w-[22%] flex flex-col'>
            <div className='font-montserrat text-[14px] font-semibold leading-[24px]'>CART TOTALS</div>
            <div className='border border-[#EAEAEA] rounded-[20px] my-4 p-8'>
                <div className='flex justify-between items-center border-b py-2'>
                    <div className='font-montserrat text-[14px] font-semibold leading-[24px]'>SUBTOTAL</div>
                    <div className='font-montserrat text-[16px] font-semibold leading-[19.5px]'>$399.00</div>
                </div>

                <div className='flex justify-between items-center border-t py-2 mt-24'>
                    <div className='font-montserrat text-[14px] font-semibold leading-[24px]'>TOTAL</div>
                    <div className='font-montserrat text-[16px] font-semibold leading-[19.5px]'>$399.00</div>
                </div>
            </div>
            <Button
                    type="submit"
                    label="Proceed To Checkout"
                    className='bg-[#E4087F] hover:bg-[#ac0660] p-3 flex items-center justify-center font-montserrat text-[16px] font-semibold leading-[24px] text-[#fff] rounded-md'
                    onClick={()=>handleProceedToCheckout(399)}
                />
        </div>
    </div>
  )
}

export default CartInfo