import React from 'react'
import OrderListTable from './OrderListTable'

const OrderList = () => {
    return (
        <div className='py-6 px-4 xs:px-8 xl:px-16 3xl:px-24'>
            <div className='flex'>
                <div className={`p-3 border rounded-xl bg-indigo-50 text-indigo-700 font-montserrat text-[14px] sm:text-[20px] cursor-pointer 
                        border-indigo-700`}>
                    Orders list
                </div>
            </div>
            <div className='h-[60vh] overflow-auto border border-gray-300 border-t-0 mt-8'><OrderListTable /></div>
        </div>
    )
}

export default OrderList