import CryptoJS from "crypto-js";


export default async function tokenDecrypt(token: string) {
    try {
        const sceKey: any = process.env.jwtPrivateKey
        const bytes = CryptoJS.AES.decrypt(token, sceKey).toString(CryptoJS.enc.Utf8); //token; secret key should exist only on server side
        const decryptToken = JSON.parse(bytes).token;
        return decryptToken;
    } catch (error) {
        console.error(error, "Error in generate token")
    }
}