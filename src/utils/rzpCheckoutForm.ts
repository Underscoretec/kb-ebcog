// import toast from "react-hot-toast";
import axios from "axios";
import { getCookie } from "./cookieUtils";
// import Razorpay from 'razorpay';

export async function rzpCheckoutFrom(data: any) {
    const userDetails = getCookie("userDetails")

    console.log("data===>",data, userDetails)
    
    try {

        const options: any = {
            "key": process.env.NEXT_PUBLIC_RZP_PAYMENT_KEY, // Enter the Key ID generated from the Dashboard
            "amount": data?.amount, // Amount is in currency subunits. Default currency is AED. Hence, 50000 refers to 50000 paise
            "currency": data?.currency,
            // "name": "Ecommerce payment",
            "description": "Test Transaction",
            // "image": data?.logo,
            "order_id": data?.rzpOrderId,
             //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            "handler": 
            async function (response: any) {
                console.log("response", response)
                response.customerId = userDetails?._id
                response.amount = (data?.amount / 100)
                const verified = await verifyPayment(response,data?._id)
                console.log("verified ##",verified)
                if (verified?.code ==='PAYMENT_SUCCESS') {
                    data.router.push({
                        pathname: data?.redirectUrl,
                        query: { orderId: data?.orderId }
                    })
                    // data.cartEmpty();
                } else {
                    data.setCurrentStep(1)
               }

            },
            "prefill": {
                "name":userDetails?.first_name,
                "email": userDetails?.email, 
                "contact": userDetails?.phone?.number,            
            },
            "theme": {
                "color": "#E4087F"
            },
            modal: {
                escape: false, // Disable closing on pressing the `Esc` key
                ondismiss: function () {
                    console.log("User closed the Razorpay modal.");
                    // Handle the case where the user exits the payment modal
                    data.setCurrentStep(1)
                },
            },
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

export async function verifyPayment(data: any,id: string) {

    try {
        const verify = await axios.post("/api/payments/verify", {
            razorpay_order_id: data?.razorpay_order_id,
            razorpay_payment_id: data?.razorpay_payment_id,
            razorpay_signature: data?.razorpay_signature,
            id: id,   // _id of order data
            customerId: data?.customerId,
            amount: data?.amount,
        });
        console.log(verify, "verify payment signature call")
        return verify.data
        
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

