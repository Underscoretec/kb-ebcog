import { doGetApiCall, doPostApiCall } from "@/utils/ApiConfig";
import { getCookie, setCookie } from "@/utils/cookieUtils";
import axios from "axios";
import { useState } from "react";

export const useUserHook = () => {
    const UserId = getCookie("userId")
    const [loading, setLoading] = useState(false)

    
    async function createCourseRegistrationApi(data: any, action: any) {
        const formData = new FormData();
        formData.append("fullName", data?.fullName as string);
        formData.append("whatsAppNumber", data?.whatsAppNumber as string);
        formData.append("email", data?.email as string);
        formData.append("courseName", data?.diplomaCourse as string);
        formData.append(
            "address",
            JSON.stringify({
                city: data?.city,
                state: data?.state,
                country: data?.country,
            }) as string
        );
        formData.append("latestDegreeCertificate", data?.degreeCertificate);
        formData.append("basicDegreeDocument", data?.basicDegreeDocument);

        try {
            // dispatch(postQustionRequest(true))
            // dispatch(getPostQuestionError(false))
            const res = await axios.post("/api/registration/create", formData, {
                headers: {
                    authorization: localStorage.getItem("token"),
                    "Content-Type": "multipart/form-data",
                    // deviceDetails: deviceData || '',
                },
            });
            // dispatch(postQustionRequest(false))
            // console.log(res, "res createCourseRegistrationApi ##");
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

    async function handleLogin(data: any) {
        const loginData = {
            url: "api/auth/login",
            bodyData: {
                email: data.email,
                password: data.password,
            },
        };
        try {
            const response: any = await doPostApiCall(loginData);
            if (!response.error) {
                setCookie("token", response.token, 7);
                // setCookie("UserEmail", response.result.email, 7);
                setCookie("userId", response.result._id, 7);
                await getUserDetails(response.result._id);
                return response;
                // alert("Login Successfully");
            } else {
                // alert("Invalid credentials");
                return response;
            }
        } catch (err: any) {
            console.error(err);
        }
    }

    async function handleSignUp(data: any, action: any) {
        const signupData = {
            url: "api/auth/signup",
            bodyData: {
                first_name: data.firstname,
                last_name: data.lastname,
                email: data.email,
                password: data.password,
                phone: {
                    code: data.phoneCode,
                    number: data.number,
                },
                address: {
                    city: data.city,
                    state: data.state,
                    country: data.country,
                },
            },
        };
        try {
            const response: any = await doPostApiCall(signupData);
            if (response.status === 201) {
                action.resetForm();
            }
            return response;
        } catch (error) {
            return error;
        }
    }

    const getUserDetails = async (id:any) =>{
        const user_id = id || UserId;
        const data = {
            url:`/api/users/details?userId=${user_id}`
        }
        try {
            const res: any = await doGetApiCall(data);
            if (!res.error) {
                setCookie("userDetails", res.result, 7);
                // return res.result?.items;
            } else {
                console.error('Error fetching user details:', res.message);
                // return [];
            }
        } catch (err) {
            console.error('API Error:', err);
            // return [];
        }
    }

    const getRegisterUserList = async (page:any) =>{
        setLoading(true)
        const data = {
            url:`/api/registration/list?page=${page}&dataPerPage=10`
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
        } finally {
            setLoading(false);
        }
    }

    const getSignupUserList = async (page:any) =>{
        setLoading(true)
        const data = {
            url:`/api/users/list?page=${page}&dataPerPage=10`
        }
        try {
            const res: any = await doGetApiCall(data);
            if (!res?.error) {
                return res;
            } else {
                console.error('Error fetching signup user list:', res.message);
                return [];
            }
        } catch (err) {
            console.error('API Error:', err);
            return [];
        }
        finally {
            setLoading(false);
        }
    }

    return {
        createCourseRegistrationApi,
        handleLogin,
        handleSignUp,
        getUserDetails,
        getRegisterUserList,
        getSignupUserList,
        loading
    };
};
