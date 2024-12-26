import { doGetApiCall } from '@/utils/ApiConfig';
import React from 'react'

const useOrdersHooks = () => {

    const getOrderList = async () =>{
        const data = {
            url:`/api/orders/list`
        }
        try {
            const res: any = await doGetApiCall(data);
            if (!res.error) {
                console.log("res ##",res)
                return res.result;
            } else {
                console.error('Error fetching user list:', res.message);
                return [];
            }
        } catch (err) {
            console.error('API Error:', err);
            // return [];
        }
    }

  return {getOrderList}
}

export default useOrdersHooks