/* eslint-disable @typescript-eslint/ban-ts-comment */
import { NextApiRequest, NextApiResponse } from "next";
import Registration from "./model";
// import User from "./model";
import messages from "@/__server__/utils/message.json";
import { logger } from "@/__server__/utils/logger";
import errorResponse from "@/__server__/utils/errorResponse";

interface ExtendApiRequest extends NextApiRequest {
    files?: Express.MulterS3.File[], user?: any
}


const courseRegistration = async (req: ExtendApiRequest, res: NextApiResponse) => {
    logger.info(`[Registration-001] Course Registration create api call`);
    const { fullName, email, whatsAppNumber, phoneNo, address, courseName, gender, } = req.body
    try {
        // @ts-ignore
        const latestDegreeCertificate = req.files?.["latestDegreeCertificate"]?.[0];
        // @ts-ignore
        const basicDegreeDocument = req.files?.['basicDegreeDocument']?.[0];

        const createObj = {
            name: fullName,
            email: email,
            whatsAppNumber: whatsAppNumber,
            phoneNo: phoneNo,
            address: address && JSON.parse(address),
            courseName: courseName,
            gender: gender,
            LatestDegreeCertificate: latestDegreeCertificate,
            basicDegreeDocument: basicDegreeDocument,
            createdAt: Date.now(),
        }

        const saveRegistration = await new Registration(createObj).save();
        


        return res.status(201).json({
            message: messages['COURSES_SAVED'],
            error: false,
            code: 'COURSES_SAVED',
            result: saveRegistration
        });
        
    } catch (error) {
        return res.status(500).json(errorResponse(error));
    }
    
}


export default {
    courseRegistration
}