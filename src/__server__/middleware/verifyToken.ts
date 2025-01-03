import jwt from "jsonwebtoken";
import config from "../config";
import User from "../users/model"
import CryptoJS from "crypto-js";
import messages from "@/__server__/utils/message.json";
import { logger } from "@/__server__/utils/logger";
import originValidation from "../security/originValidation";

export default async function verifyToken(req: any, res: any, next: any) {
    try {
        const { authorization, cookie }: any = req.headers;

        const validate = await originValidation(req.headers)

        if (!validate) {
            logger.error(`Invalid origin`)
            return res.status(401).send({
                error: true,
                code: "UNAUTHORIZED",
                message: messages["UNAUTHORIZED"]
            })
        }

        const enToken = authorization || cookie;

        const bytes = CryptoJS.AES.decrypt(enToken, config.tokenSecret).toString(CryptoJS.enc.Utf8); //token; secret key should exist only on server side
        console.log(bytes, 'bytes ######');
        const token = JSON.parse(bytes).token;

        if (!token) {
            logger.error(`Token missing`)
            return res.status(401).send({
                error: true,
                code: "UNAUTHORIZED",
                message: messages["UNAUTHORIZED"]
            })
        }

        const decode: any = jwt.verify(token, config.tokenSecret)
        if (decode?.email) {
            const user = await User.findOne({
                _id: decode.id
            }).select('-password');

            if (!user) {
                logger.error(`User not verified`)
                return res.status(401).send({
                    error: true,
                    code: "UNAUTHORIZED",
                    message: messages["UNAUTHORIZED"]
                })
            }

            req.user = user;
            await next();
        } else {
            logger.error(`Token not valid`)
            return res.status(401).send({
                error: true,
                code: "UNAUTHORIZED",
                message: messages["UNAUTHORIZED"]
            })
        }
    } catch (err) {
        logger.error(err, "<== Error in token verification failed");
        res.status(401).json({
            error: true,
            code: "UNAUTHORIZED",
            message: messages["UNAUTHORIZED"]
        });
    }
}
