// import App from "__server__/model/App";
import url from 'url';
import config from "../config"
import { logger } from "@/__server__/utils/logger";


export default async function originValidation(header: any) {
    try {
        const origin: string = header?.origin || header.referer;
        const accessArr = config.accessOrigin;

        if (!origin) {
            return false;
        }

        logger.info(`User hit this origin : ${origin}`)
        const hostCheck: any = url.parse(origin, true)

        if (accessArr?.includes(hostCheck.host)) {
            return true;
        } else {
            return false;
        }
    } catch (err) {
        logger.error(err, "token validation failed");
        return false;
    }
}