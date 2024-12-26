import tokenChecker from "./tokenChecker";
import { useRouter } from "next/router";
// import { useDispatch } from "react-redux";
// import { newMessage } from "../Store/Reducers/SnackbarSlice";
import Cookies from "js-cookie";
import { getCookie } from "./cookieUtils";


export const useRouteProtection = () => {
    // const dispatch = useDispatch();
    
    const router = useRouter();
    const token = getCookie("token") || '';
    
    if (typeof window === 'undefined') {
        // Prevent SSR execution
        return;
    }

    // const token = localStorage.getItem('token') || '';
    if (token) {
        const isValidated = tokenChecker(token);
        isValidated.then((data) => {
            if (data) {
                // dispatch(newMessage({ data: 'SESSION_EXPIRED' }));
                router.push('/');
            }

        })
    } else {
        const path: any = typeof window !== 'undefined' ? window.location.href : null
        const originCheck = typeof window !== 'undefined' ? window.location.origin : "";

        const setPath = path?.replace(originCheck, "")
        const currentPath = setPath?.includes("undefined") ? "" : setPath
        Cookies.set("previousPath", currentPath)
        // if (currentPath?.includes("doctor")) {
        // }
        // dispatch(newMessage({ data: 'SESSION_EXPIRED' }));
        router.push('/login');
    }

}

