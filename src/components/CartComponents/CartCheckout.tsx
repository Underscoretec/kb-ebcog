import React from 'react'
import CartProductCart from './CartProductCart'

const CartCheckout = () => {

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


  return (
    <div className='flex flex-col lg:flex-row  gap-12 lg:gap-4 justify-between'>
        <div className='w-[100%] lg:w-[72%] xl:w-[75%]'>
            <div className='flex font-montserrat text-[14px] font-semibold leading-[24px] gap-4 px-4'>
                <div className='w-[70%]'>PRODUCT</div>
                <div className='w-[12%] hidden md:block'>PRICE</div>
                <div className='w-[13%] hidden md:block'>SUBTOTAL</div>
            </div>
            {
                products.map((item: any,index: any)=>{
                    return( <CartProductCart key={index} data={item} edit={false}/>)
                })
            }
        </div>
        <div className='w-[100%] lg:w-[26%] xl:w-[23%] flex flex-col'>
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
        </div>
    </div>
  )
}

export default CartCheckout