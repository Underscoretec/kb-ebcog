import { doGetApiCall } from '@/utils/ApiConfig';
import { useState } from 'react';

const useOrdersHooks = () => {
    const [loading, setLoading] = useState(false)

    const getOrderList = async (page:any) =>{
        setLoading(true)
        const data = {
            url:`/api/orders/list?page=${page}&dataPerPage=10`
        }
        try {
            const res: any = await doGetApiCall(data);
            if (!res?.error) {
                return res;
            } else {
                console.error('Error fetching user list:', res?.message);
                return [];
            }
        } catch (err) {
            console.error('API Error:', err);
            return [];
        }finally {
            setLoading(false);
        }
    }

    const getTransactionList = async (page:any) =>{
        setLoading(true)
        const data = {
            url:`/api/payments/list?page=${page}&dataPerPage=10`
        }
        try {
            const res: any = await doGetApiCall(data);
            // console.log("res====##",res)
            if (!res?.error) {
                return res;
            } else {
                console.error('Error fetching transaction list:', res?.message);
                return [];
            }
        } catch (err) {
            console.error('API Error:', err);
            return [];
        }finally {
            setLoading(false);
        }
    }

  return {getOrderList, getTransactionList, loading}
}

export default useOrdersHooks