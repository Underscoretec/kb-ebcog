import React, { useEffect, useState, } from 'react'
import CartProductCart from './CartProductCart'
import Button from '@/common/uicomponents/Button'
import {
    loadRazorpay,
    rzpCheckoutFrom
} from '@/utils/rzpCheckoutForm'
import Router from "next/router";
import { formatBasePrice } from '@/utils/formatBasePrice';
import { doPostApiCall } from '@/utils/ApiConfig';
import { getCookie } from '@/utils/cookieUtils';
import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';
dayjs.extend(localizedFormat);

const CartInfo = ({
    setCurrentStep,
    cartItems, handleRemoveItem }: any) => {

    const userId = getCookie("userId");
    const [order, setOrder] = useState(null);

    const createOrder = async () => {
        if (cartItems && cartItems?.length > 0 && userId) {
            const orderData = {
                url: "api/orders/create",
                bodyData: {
                    userId: userId,
                    courseId: cartItems[0]?.course?._id,
                    item: {
                        courseId: cartItems[0]?.course?._id,
                        quantity: 1,
                        price: cartItems[0]?.course?.price?.base,
                        name: cartItems[0]?.course?.name
                    }
                },
            };
            try {
                const response: any = await doPostApiCall(orderData);
                if (!response.error) {
                    console.log(response, 'response ##');
                    setOrder(response?.result);

                    return response?.result;
                } else {
                    return response;
                }
            } catch (err: any) {
                console.error(err);
            }
        }
    }

    const handleProceedToCheckout = async (values: any) => {
        setCurrentStep(2);
        if (process.env.NEXT_PUBLIC_PAYMENT_GATEWAY === 'razorpay') {
            console.log("values ##", values);
            const razOrderCreate = await createOrder();
            console.log(razOrderCreate, 'razOrderCreate ##');

            const paymentData = await rzpCheckoutFrom({
                amount: values.amount * 100,
                redirectUrl: "/confirmation",
                router: Router,
                currency: values.currency,
                _id: razOrderCreate?._id,
                rzpOrderId: razOrderCreate.paymentOrderId,
                setCurrentStep: setCurrentStep

            })
            console.log(paymentData, "paymentData 001")
        }
    };

    useEffect(() => {
        loadRazorpay();
    }, [])
    useEffect(() => {
        console.log(order, 'order ##');
    }, [order]);

    return (
        <div className='flex flex-col lg:flex-row  gap-12 lg:gap-4 justify-between'>
            <div className='w-[100%] lg:w-[72%] xl:w-[75%]'>
                <div className='flex font-montserrat text-[14px] font-semibold leading-[24px] gap-4 px-4'>
                    <div className='w-[70%]'>PRODUCT</div>
                    <div className='w-[12%] hidden md:block'>PRICE</div>
                    <div className='w-[13%] hidden md:block'>SUBTOTAL</div>
                </div>
                {
                    cartItems.map((item: any, index: any) => {
                        return (<CartProductCart key={index} data={item} handleRemoveItem={handleRemoveItem} />)
                    })
                }
            </div>
            <div className='w-[100%] lg:w-[26%] xl:w-[23%] flex flex-col'>
                <div className='font-montserrat text-[14px] font-semibold leading-[24px]'>CART TOTALS</div>
                <div className='border border-[#EAEAEA] rounded-[20px] my-4 p-8'>
                    <div className='flex justify-between items-center border-b py-2'>
                        <div className='font-montserrat text-[14px] font-semibold leading-[24px]'>SUBTOTAL</div>
                        <div className='font-montserrat text-[16px] font-semibold leading-[19.5px]'> {cartItems[0]?.course?.price?.currency} {dayjs().isBefore(dayjs(cartItems[0]?.course?.discount?.endDate)) ? formatBasePrice(Number(cartItems[0]?.course?.price?.base) - Number(cartItems[0]?.course?.discount?.value)) : formatBasePrice(cartItems[0]?.course?.price?.base)}</div>
                    </div>

                    <div className='flex justify-between items-center border-t py-2 mt-24'>
                        <div className='font-montserrat text-[14px] font-semibold leading-[24px]'>TOTAL</div>
                        <div className='font-montserrat text-[16px] font-semibold leading-[19.5px]'>{cartItems[0]?.course?.price?.currency} {dayjs().isBefore(dayjs(cartItems[0]?.course?.discount?.endDate)) ? formatBasePrice(Number(cartItems[0]?.course?.price?.base) - Number(cartItems[0]?.course?.discount?.value)) : formatBasePrice(cartItems[0]?.course?.price?.base)}</div>
                    </div>
                </div>
                <Button
                    type="submit"
                    label="Proceed To Checkout"
                    className='bg-[#E4087F] hover:bg-[#ac0660] p-3 flex items-center justify-center font-montserrat text-[16px] font-semibold leading-[24px] text-[#fff] rounded-md'
                    onClick={() => handleProceedToCheckout({
                        amount: dayjs().isBefore(dayjs(cartItems[0]?.course?.discount?.endDate)) ? Number(cartItems[0]?.course?.price?.base) - Number(cartItems[0]?.course?.discount?.value) : cartItems[0]?.course?.price?.base,
                        currency: cartItems[0]?.course?.price?.currency
                    })}
                />
            </div>
        </div>
    )
}

export default CartInfo