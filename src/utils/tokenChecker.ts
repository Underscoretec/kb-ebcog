import tokenDecrypt from "../__server__/utils/tokenDecrypt"
import { isExpired } from "react-jwt";
// import { doPostApiCall } from "./ApiConfig";
// import axios from "axios";
// import getDeviceDetails from "./getDeviceDetails";
// import { getCookie } from "./cookieUtils";


export default async function tokenChecker(token: string) {
    try {
        // return true => your token is expired
        // return false => your token is not expired
        const deptToken = await tokenDecrypt(token);
        if (deptToken) {
            const isTokenExpired = isExpired(deptToken);
            if (isTokenExpired) {
                return isTokenExpired;
                // const refreshToken: string = localStorage.getItem("refreshToken") || ""
                // if (!refreshToken) {
                //     return true
                // } else {
                //     const deptRefreshToken = await tokenDecrypt(refreshToken)
                //     const isRTokenExpired = isExpired(deptRefreshToken);
                //     if (isRTokenExpired) {
                //         return isRTokenExpired
                //     } else {
                //         const deviceData = getDeviceDetails();
                //         let token: any;
                //         if (typeof window !== 'undefined') {
                //             // token = localStorage.getItem('token')
                //             token = getCookie ("token") || '';
                //         };
                        
                //         const res: any = await axios.post(`/api/auth/access/token`, { refreshToken: refreshToken }, { headers: { deviceDetails: deviceData || '', Authorization: token || "" } });


                //         if (res?.data?.code === "ACCESS_TOKEN") {
                //             localStorage.setItem('token', res?.data?.token);
                //             return false
                //         } else {
                //             return true
                //         }
                //     }
                // }
            }else{
                return false
            }
        } else {
            return false;
        }
    } catch (error) {
        console.log(error, "Error in token check")
        return true;
    }
}