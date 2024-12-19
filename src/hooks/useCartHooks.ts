import { doDeleteApiCall, doPostApiCall } from '@/utils/ApiConfig';
import { getCookie } from '@/utils/cookieUtils';
import React from 'react'

const useCartHooks = () => {
    const UserId = getCookie("userId")

    const addToCart = async (id: any) => {
        const data = {
            url: "/api/carts/itemadd",
            bodyData: {
                "courseId": id,
                "quantity": 1,
                "userId": UserId
            },
        };
        try {
            const response: any = await doPostApiCall(data);
            console.log("response ##", response)
            if (!response.error) {

                console.log("response ##", response)
                // alert("Login Successfully");
            } else {
                alert("Something went wrong");
            }
        } catch (err: any) {
            console.error(err);
        }
    }

    const removeToCart = async (courseId: any) => {
        const data = {
            url: `/api/carts/itemremove?userId=${UserId}&courseId=${courseId}`
        };
        try {
            const response: any = await doDeleteApiCall(data)
            if (!response.error) {

                console.log("response ##", response)
                // alert("Login Successfully");
            } else {
                alert("Something went wrong");
            }
        } catch (err: any) {
            console.error(err);
        }
    }

    return { addToCart, removeToCart }
}

export default useCartHooks