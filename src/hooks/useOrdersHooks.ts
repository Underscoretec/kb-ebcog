import { doGetApiCall } from '@/utils/ApiConfig';

const useOrdersHooks = () => {

    const getOrderList = async (page:any) =>{
        const data = {
            url:`/api/orders/list?page=${page}&dataPerPage=10`
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