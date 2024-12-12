import { duration } from '@mui/material'
import React from 'react'

const CartInfo = () => {

    const products = [
        {
            id:'Course01',
            image:'',
            coursename:'Diploma in Fetal Medicine and Ultrasound',
            by:'Determined-Poitras',
            duration:'2 Weeks',
            TotalLearners:'15,674',
        },
    ]

  return (
    <div className='flex gap-4'>
        <div className='w-[75%]'>
            <div className='flex font-montserrat text-[14px] font-semibold leading-[24px]'>
                <div className='w-[72%]'>PRODUCT</div>
                <div className='w-[12%]'>PRICE</div>
                <div className='w-[13%]'>SUBTOTAL</div>
            </div>
            <div>

            </div>
        </div>
        <div className='w-[22%]'></div>
    </div>
  )
}

export default CartInfo