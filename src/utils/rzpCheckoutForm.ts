// import toast from "react-hot-toast";
import axios from "axios";
import { getCookie } from "./cookieUtils";
// import Razorpay from 'razorpay';

export async function rzpCheckoutFrom(data: any) {
    const userDetails = getCookie("userDetails")
    
    try {

        const options: any = {
            "key": process.env.NEXT_PUBLIC_RZP_PAYMENT_KEY, // Enter the Key ID generated from the Dashboard
            "amount": data?.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            "currency": data?.currency,
            // "name": "Ecommerce payment",
            "description": "Test Transaction",
            // "image": data?.logo,
            // "order_id": data?.rzpOrderId, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            "handler": 
            async function (response: any) {
                console.log("response", response)
                // response.customerId = data?.user?._id
                // response.amount = (data?.amount / 100)
                // const verified = await verifyPayment(response)
                // if (verified?.result.id) {
                    data.router.push({
                        pathname: data?.redirectUrl,
                        query: { orderId: data?.orderId }
                    })
                    // data.cartEmpty();
               // }

            },
            "prefill": {
                "name":userDetails?.first_name,
                "email": userDetails?.email, 
                "contact": userDetails?.phone?.number,            
            },
            "theme": {
                "color": "#E4087F"
            }
        };
        // const windowS: any = typeof window === 'undefined' && window
        const rzpCheckout: any = new (window as any).Razorpay(options);

        rzpCheckout.on('payment.failed', function (response: any) {
            alert(`Payment error id:- ${response.error.metadata.payment_id} error code: ${response.error.code}`);
        });
        rzpCheckout.on('qr_code.credited', () => {
            console.log('qr_code.credited event fired');
            rzpCheckout.close();
            data.router.push({
                pathname: data?.redirectUrl,
                query: { orderId: "abcde" } //data?.orderId
            })
            // data.cartEmpty();
        });
        rzpCheckout.open();


    } catch (error) {
        console.log(error, "Error in rzp checkout page");
    }
}

export async function verifyPayment(data: any) {
    try {
        const verify = await axios.post("/api/payment/verify", {
            order_id: data?.razorpay_order_id,
            razorpay_payment_id: data?.razorpay_payment_id,
            razorpay_signature: data?.razorpay_signature,
            customerId: data?.customerId,
            amount: data?.amount,
        });
        return verify.data
        // console.log(verify, "verify payment signature call")
    } catch (error) {
        console.log(error, "Error in payment verify");
    }
}

 export async function loadRazorpay() {
    return new Promise<void>((resolve) => {
        const script = document.createElement('script');
        script.src = 'https://checkout.razorpay.com/v1/checkout.js';
        script.onload = () => {
            resolve();
        };
        document.body.appendChild(script);
    });
};

