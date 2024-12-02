import { logger } from "./logger"
import config from '@/__server__/config';
import jwt from "jsonwebtoken";
import CryptoJS from "crypto-js";

interface Payload {
    id: string,
    email: string,
    deviceDetails?: any
}

export default async function tokenGenerate(payload: Payload, expiresIn?: string) {
    try {
        const token = await jwt.sign(payload, config.tokenSecret, { expiresIn: expiresIn || config.Expires });

        if (token) {
            const cipherToken = CryptoJS.AES.encrypt(
                JSON.stringify({ token }),
                config.tokenSecret
            ).toString();

            return cipherToken;
        }
    } catch (error) {
        logger.error(error, "Error in generate token")
    }
}