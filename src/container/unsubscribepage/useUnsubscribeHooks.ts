import axios from 'axios';

export const useUnsubscribeHook = () => {

    async function unsubscribeApi(id: any) {
        try {
            const res = await axios.put(`/api/campaigns/unsubscribe/${id}`, id, {
                headers: {
                    'authorization': localStorage.getItem('token'),
                    'Content-Type': "application/json",
                }
            })
            console.log(res, "res**")
            
        } catch (error) {
            return error;
        }
        
    }

    return {
        unsubscribeApi,
    };
};
