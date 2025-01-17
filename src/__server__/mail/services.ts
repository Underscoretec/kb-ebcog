// import fs from 'fs';
import { sendEmailWithSES, sendEmailWithNodemeler } from './mail';
// import messages from "@/__server__/utils/message.json";
import { logger } from "@/__server__/utils/logger";
// import errorResponse from "@/__server__/utils/errorResponse";
import { sendEmailToRegisterUser } from './templates/sendEmailToRegisterUser';
// import { inviteUserToRegister } from '@/__server__/mail/templates/inviteUserToRegister';
import { mcmDrInvitationTemp } from './templates/macMasterInvite';

const sendEmailRegistrationAcknowledgement = async (data: any) => {
    try {
        const userName = `${"Dear Dr."} ${data?.name}`
        let city = 'Dubai, UAE';
        let courseName = '';
        let pdf = ''
        switch (data?.courseName) {
            case 'maternalMedicine':
                courseName = 'Maternal Medicine';
                pdf = 'maternal-medicine.pdf';
                break;
            case 'reproductiveEndocrinology_Infertility':
                courseName = 'Diploma in Reproductive Endocrinology & Infertility';
                pdf = 'reproductive-endocrinology-infertility.pdf';
                break;
            case 'fetalMedicine_Ultrasound':
                courseName = 'Fetal Medicine and Ultrasound';
                pdf = 'fetal-medicine-and-ultrasound.pdf';
                break;
            case 'gynaecologyEndoscopy':
                courseName = 'Gynaecology Endoscopy';
                pdf = 'gynaecology-endoscopy.pdf';
                city = 'Sharjah, UAE';

            default:
                break;
        }
        const text = sendEmailToRegisterUser(userName, courseName, city, pdf);
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

const inviteUserForRegister = async (data: any, req: any, count: number) => {
    logger.info("inviteUserForRegister function call.")
    try {

        // const text = inviteUserToRegister(data?.name);
        const text = mcmDrInvitationTemp(data?.name, data?.email);
        const template = text.replace(/^\s+|\s+$|\s+(?=\s)/g, '')

        if (req?.query?.mailProvider === "SES") {
            const Body = {
                Html: {
                    Charset: "UTF-8",
                    Data: template
                },
                Text: {
                    Charset: "UTF-8",
                    Data: `Your Online Access to McMaster Textbook of Internal Medicine - South Asia Edition`
                },
            }
            const sendMailObj: any = {
                receiverAddress: data.email,
                body: Body,
                subject: {
                    Charset: "UTF-8",
                    Data: `Your Online Access to McMaster Textbook of Internal Medicine - South Asia Edition`,
                },
                count: count
            }

            sendEmailWithSES(sendMailObj);
        } else if (req?.query?.mailProvider === "SMTP") {
            sendEmailWithNodemeler({
                toEmail: data.email,
                htmlBody: template,
                subject: `Your Online Access to McMaster Textbook of Internal Medicine - South Asia Edition`
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