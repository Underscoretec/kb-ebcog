import { doGetApiCall } from '@/utils/ApiConfig';
import { useState } from 'react'

const useCourseHooks = () => {
    const [loading, setLoading] = useState(false);
     
    const fetchCoursePlan = async (category:any) =>{
        console.log("category##",category)
        setLoading(true);
        const data = {
            url: `/api/courses/list?category=${category}`,
        };
        console.log("data==>",data)
        try {
            const res: any = await doGetApiCall(data);
            console.log("res===>",res)
            if (!res.error) {
                return res.result; // Return the result directly
            } else {
                console.error('Error fetching user list:', res.message);
                return [];
            }
        } catch (err) {
            console.error('API Error:', err);
            return [];
        } finally {
            setLoading(false);
        }
    }

  return {loading, fetchCoursePlan}
}

export default useCourseHooks