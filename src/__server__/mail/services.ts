// import fs from 'fs';
import { sendEmailWithSES, sendEmailWithNodemeler } from './mail';
// import messages from "@/__server__/utils/message.json";
import { logger } from "@/__server__/utils/logger";
// import errorResponse from "@/__server__/utils/errorResponse";
import { sendEmailToRegisterUser } from './templates/sendEmailToRegisterUser';
import { inviteUserToRegister } from '@/__server__/mail/templates/inviteUserToRegister';

const sendEmailRegistrationAcknowledgement = async (data: any) => {
    try {
        const userName = `${"Dear"} ${data?.name}`
        let city = 'Dubai, UAE';
        let courseName = '';
        switch (data?.courseName) {
            case 'maternalMedicine':
                courseName = 'Maternal Medicine';
                break;
            case 'reproductiveEndocrinology_Infertility':
                courseName = 'Diploma in Reproductive Endocrinology & Infertility';
                break;
            case 'fetalMedicine_Ultrasound':
                courseName = 'Fetal Medicine and Ultrasound';
                break;
            case 'gynaecologyEndoscopy':
                courseName = 'Gynaecology Endoscopy';
                city = 'Sharjah, UAE';

            default:
                break;
        }
        const text = sendEmailToRegisterUser(userName, courseName, city);
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
        const sendMailObj: any = {
            receiverAddress: data.email,
            body: Body,
            subject: {
                Charset: "UTF-8",
                Data: `Thank You for Your Enrolment to European Board & College of Obstetrics & Gynecology Diploma`,
            },
        }
        if (process.env.NODE_ENV === 'production' && process.env.CC_EMAILS) {
            sendMailObj.cc = process.env.CC_EMAILS
        }
        sendEmailWithSES(sendMailObj);
    } catch (error) {
        logger.error(error, `Registration ACK Email send error!`)
    }
}

const inviteUserForRegister = async (data: any, req: any) => {
    logger.info("inviteUserForRegister function call.")
    try {

        const text = inviteUserToRegister(data?.name, data?.email);
        const template = text.replace(/^\s+|\s+$|\s+(?=\s)/g, '')

        if (req?.query?.mailProvider === "SES") {
            const Body = {
                Html: {
                    Charset: "UTF-8",
                    Data: template
                },
                Text: {
                    Charset: "UTF-8",
                    Data: `Introducing European Board Collage of Obstetrics and Gynaecology Diplomas`
                },
            }
            const sendMailObj: any = {
                receiverAddress: data.email,
                body: Body,
                subject: {
                    Charset: "UTF-8",
                    Data: `Introducing European Board Collage of Obstetrics and Gynaecology Diplomas`,
                },
            }

            sendEmailWithSES(sendMailObj);
        } else if (req?.query?.mailProvider === "SMTP") {
            sendEmailWithNodemeler({
                toEmail: data.email,
                htmlBody: template,
                subject: `Introducing European Board Collage of Obstetrics and Gynaecology Diplomas`
            })
        }

    } catch (error) {
        logger.error(error, `Error occurred to invite user for registration!`)
    }
}


export {
    sendEmailRegistrationAcknowledgement,
    inviteUserForRegister
}