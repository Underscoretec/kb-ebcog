import { doPostApiCall } from "@/utils/ApiConfig";
import { setCookie } from "@/utils/cookieUtils";
import axios from "axios";

export const useUserHook = () => {
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
      console.log(res, "res createCourseRegistrationApi ##");
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
        alert("Login Successfully");
      } else {
        alert("Invalid credentials");
      }
    } catch (err: any) {
      console.error(err);
    }
  }

  async function handleSignUp(data: any, action: any) {
    console.log("data**", data);
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
    console.log(signupData, "signupData**");
    try {
      const response: any = await doPostApiCall(signupData);
      console.log("response**", response);
      if (response.status === 201) {
        action.resetForm();
        console.log("response", response);
      }
      return response;
    }catch (error) {
        return error;
      }
    } 

  return {
    createCourseRegistrationApi,
    handleLogin,
    handleSignUp,
  };
};
