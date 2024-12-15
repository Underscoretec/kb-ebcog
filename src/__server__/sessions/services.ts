import { NextApiRequest, NextApiResponse } from "next";
import SessionsModel from "./model";
import messages from "@/__server__/utils/message.json";
import { logger } from "@/__server__/utils/logger";
import errorResponse from "@/__server__/utils/errorResponse";
import { v4 as uuidv4 } from 'uuid';



const createSession = async (req: NextApiRequest, res: NextApiResponse) => {
    logger.info("[Session create/update api call 001]")
    const { sessionId, timeStamp, fullName, email, whatsAppNumber, address, courseName, } = req.body;
    try {
        if (sessionId) {
            const session = await SessionsModel.findOne({ sessionId: sessionId });
            if (!session) {

                return res.status(404).json({
                    message: messages['SESSION_NOT_FOUND'],
                    error: false,
                    code: 'SESSION_NOT_FOUND',
                    result: {}
                });
            }


            session.timeStamp = timeStamp;
            session.fullName = fullName || session?.fullName;
            session.email = email || session?.email;
            session.whatsAppNumber = whatsAppNumber || session?.whatsAppNumber;
            session.address = address || session?.address;
            session.courseName = courseName || session?.courseName;
            session.courseName = courseName || session?.courseName;
            session.updatedAt = new Date();

            const updatedSession = await session.save();

            return res.status(200).json({
                message: messages['SESSION_UPDATED'],
                error: false,
                code: 'SESSION_UPDATED',
                result: updatedSession
            });

        } else {
            const sessionId = uuidv4();
            const sessionObj = {
                sessionId: sessionId,
                timeStamp: timeStamp,
                fullName: fullName,
                email: email,
                whatsAppNumber: whatsAppNumber,
                address: address,
                courseName: courseName,
                createdAt: new Date()
            };
            const newSession = await new SessionsModel(sessionObj).save();

            if (!newSession) {
                return res.status(400).json({
                    message: messages['SESSION_CREATE_FAILED'],
                    error: true,
                    code: 'SESSION_CREATE_FAILED',
                })
            }

            return res.status(200).json({
                message: messages['SESSION_CREATED'],
                error: false,
                code: 'SESSION_CREATED',
                result: newSession
            })
        }

    } catch (error) {
        logger.error(error, "[User 001] Error sign up");
        return res.status(500).json(errorResponse(error));
    }
}




export default {
    createSession
}