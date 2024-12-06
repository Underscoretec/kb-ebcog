import axios from 'axios';

export const useUserHook = () => {

    async function createCourseRegistrationApi (data:any,action:any) {
        const formData = new FormData();
        formData.append("fullName", data?.fullName as string);
        formData.append('whatsAppNumber', data?.whatsAppNumber as string);
        formData.append("email", data?.email as string);
        formData.append("courseName", data?.diplomaCourse as string);
        formData.append("address", JSON.stringify({ city: data?.city, state: data?.state, country: data?.country}) as string);
        formData.append("latestDegreeCertificate", data?.degreeCertificate);
        formData.append("basicDegreeDocument", data?.basicDegreeDocument);

        try {
            // dispatch(postQustionRequest(true))
            // dispatch(getPostQuestionError(false))
            const res = await axios.post('/api/registration/create', formData, {
                headers: {
                    'authorization': localStorage.getItem('token'),
                    'Content-Type': "multipart/form-data",
                    // deviceDetails: deviceData || '',
                }
            })
            // dispatch(postQustionRequest(false))
            console.log(res,'res createCourseRegistrationApi ##');
            if (res.status === 201) {

                // alert("Registration successfully done");
                action.resetForm();
                // dispatch(getPostQuestionSuccess(true))
            } 
            return res;

        } catch (error) {
            // console.log(error);
            return error;
            // return false;
            // dispatch(postQustionRequest(false))
            // dispatch(getPostQuestionError(true))
            // dispatch(newMessage({ data: 'failed' }))
        }
    }

    return {
        createCourseRegistrationApi
    }
}