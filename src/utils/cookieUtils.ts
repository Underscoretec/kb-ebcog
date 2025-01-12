import Cookies from 'js-cookie';
import { decrypt, encrypt } from './tokenEncryption';

export const setCookie = (name: string, value: any, expiresDays?: number) => {
    try {
        const encryptedValue = encrypt(value);
        // const options:any = expiresDays ? { expires: expiresDays } : { expires: parseInt(process.env.NEXT_PUBLIC_COOKIE_EXPIRY_DAY)}
        const expires = expiresDays ?? parseInt(process.env.NEXT_PUBLIC_COOKIE_EXPIRY_DAY || '1');
        const options: any = { expires };
        Cookies.set(name, encryptedValue, options);
    } catch (err) {
        console.error('Error setting encrypted cookie:', err);
    }
};

export const getCookie = (name: string): any | undefined => {
    try {
        const encryptedValue = Cookies.get(name);
        if (encryptedValue) {
            return decrypt(encryptedValue);
        }
        return null;
    } catch (err) {
        console.error('Error getting decrypted cookie:', err);
        return null;
    }
};

export const removeCookie = (name: string) => {
    try {
        Cookies.remove(name);
    } catch (err) {
        console.error('Error removing cookie:', err);
    }
};

export const removeAllCookies = () => {
    const allCookies = Cookies.get(); // Get all cookies

    // Loop through all cookies and remove each one
    Object.keys(allCookies).forEach(cookieName => {
        Cookies.remove(cookieName);
    });
};
