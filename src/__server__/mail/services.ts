// import fs from 'fs';
import { sendEmail } from './mail';
// import messages from "@/__server__/utils/message.json";
import { logger } from "@/__server__/utils/logger";
// import errorResponse from "@/__server__/utils/errorResponse";
import { sendEmailToRegisterUser } from './templates/sendEmailToRegisterUser';




const sendEmailRegistrationAcknowledgement = async (data: any) => {
    try {
        const userName = `${"Dear"} ${data?.name}`
        let city = 'Dubai, UAE';
        if (data?.courseName === 'gynaecologyEndoscopy') {
            city = 'Sharjah, UAE';
        }
        const text = sendEmailToRegisterUser(userName, data?.courseName, city)
        const template = text.replace(/^\s+|\s+$|\s+(?=\s)/g, '')
        
        const Body = {
            Html: {
                Charset: "UTF-8",
                Data: template
            },
            Text: {
                Charset: "UTF-8",
                Data: `Thank You for Your Enrolment to European Board & College of Obstetrics & Gynecology Diploma`
            },
        }
        sendEmail({
            receiverAddress: data.email,
            body: Body,
            subject: {
                Charset: "UTF-8",
                Data: `Thank You for Your Enrolment to European Board & College of Obstetrics & Gynecology Diploma`,
            },
            // cc:['ayan.sinha@underscoretec.com']
        });
    } catch (error) {
        logger.error(error, `Registration ACK Email send error!`)
    }
}


export {
    sendEmailRegistrationAcknowledgement,
}