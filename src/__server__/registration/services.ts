/* eslint-disable @typescript-eslint/ban-ts-comment */
import { NextApiRequest, NextApiResponse } from "next";
import Registration from "./model";
// import User from "./model";
import messages from "@/__server__/utils/message.json";
import { logger } from "@/__server__/utils/logger";
import errorResponse from "@/__server__/utils/errorResponse";
import { sendEmailRegistrationAcknowledgement } from '@/__server__/mail/services';


const nodeEnv = process.env.NODE_ENV!;
const appName = process.env.APP_NAME!;

interface ExtendApiRequest extends NextApiRequest {
    files?: Express.MulterS3.File[], user?: any
}


const courseRegistration = async (req: ExtendApiRequest, res: NextApiResponse) => {
    logger.info(`[Registration-001] Course Registration create api call`);
    const { fullName, email, whatsAppNumber, address, courseName, } = req.body
    try {
        const query: any = { enabled: 1 }
        if (email) {
            query.email = email?.toLowerCase();
        }
        // if (phoneNo) {
        //     query.phoneNo = phoneNo;
        // }
        const exist = await Registration.findOne(query);
        if (exist) {
            return res.status(400).json({
                message: messages['REGISTRATION_RECORD_FOUND'],
                error: true,
                code: 'REGISTRATION_RECORD_FOUND',
                result: {}
            });
        }
        // @ts-ignore
        const latestDegreeCertificate = req.files?.["latestDegreeCertificate"]?.[0];
        const latestDegreeCertificateObj = {
            key: latestDegreeCertificate?.key.replace(`${appName}/${nodeEnv}/`,''),
            name: latestDegreeCertificate?.originalname,
            mimetype: latestDegreeCertificate?.mimetype,
            location: latestDegreeCertificate?.location,
            size: latestDegreeCertificate?.size
        }

        // @ts-ignore
        const basicDegreeDocument = req.files?.['basicDegreeDocument']?.[0];
        const basicDegreeDocumentObj = {
            key: basicDegreeDocument?.key.replace(`${appName}/${nodeEnv}/`,''),
            name: basicDegreeDocument?.originalname,
            mimetype: basicDegreeDocument?.mimetype,
            location: basicDegreeDocument?.location,
            size: basicDegreeDocument?.size
        }

        const createObj = {
            fullName: fullName,
            email: email,
            whatsAppNumber: whatsAppNumber,
            // phoneNo: phoneNo,
            address: address && JSON.parse(address),
            courseName: courseName,
            // gender: gender,
            latestDegreeCertificate: latestDegreeCertificateObj,
            basicDegreeDocument: basicDegreeDocumentObj,
            createdAt: Date.now(),
        }

        const saveRegistration = await new Registration(createObj).save();
        if (saveRegistration) {
            sendEmailRegistrationAcknowledgement({email: email, name: fullName, courseName: courseName})
            return res.status(201).json({
                message: messages['REGISTRATION_CREATED'],
                error: false,
                code: 'REGISTRATION_CREATED',
                result: saveRegistration
            });
        }
       
        
    } catch (error) {
        logger.error("[Registration-001] Error creating new registration! ",error);
        return res.status(500).json(errorResponse(error));
    }
    
}


export default {
    courseRegistration
}