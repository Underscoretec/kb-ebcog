import { doDeleteApiCall, doGetApiCall, doPostApiCall } from '@/utils/ApiConfig';
import { getCookie } from '@/utils/cookieUtils';
import { useState } from 'react'
import { toast } from 'react-toastify';

const useCartHooks = () => {
    const [loading, setLoading] = useState(false);
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
            if (!response.error) {
                return response
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
                toast.success("Item remove successfully.");
            } else {
                alert("Something went wrong");
            }
        } catch (err: any) {
            console.error(err);
        }
    }

    const getCartItems = async () => {
        if (UserId) {
            setLoading(true)
            const data = {
                url: `/api/carts/details?userId=${UserId}`
            }
            try {
                const res: any = await doGetApiCall(data);
                if (!res.error) {
                    return res.result?.items;
                } else {
                    return [];
                }
            } catch (err) {
                console.error('API Error:', err);
                return [];
            } finally {
                setLoading(false);
            }
        } else {
            return [];
        }

    }

    return { loading, addToCart, removeToCart, getCartItems }
}

export default useCartHooks