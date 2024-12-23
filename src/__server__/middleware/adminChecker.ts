import messages from "@/__server__/utils/message.json";
import { logger } from "@/__server__/utils/logger";

export default async function adminChecker(req: any, res: any, next: any) {
    try {
        if (req.user.role === 'admin' || req.user.role === 'subAdmin') {
            next()
        } else {
            logger.info(`User not admin user role: ${req.user.role}`)
            return res.status(401).send({
                error: true,
                code: "UNAUTHORIZED",
                message: messages["UNAUTHORIZED"]
            })
        }
    } catch (error) {
        logger.error(error, `Admin checker failed`)
    }
}