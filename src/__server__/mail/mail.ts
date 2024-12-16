import * as AWS from "aws-sdk";
// import userUpdate from "../utils/userUpdate";
import nodemailer from 'nodemailer';
import { logger } from "../utils/logger";
//Amazon SES configuration
const SESconfig = {
    apiVersion: "2024-12-05",
    accessKeyId: process.env.AWS_SES_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SES_SECRET_KEY,
    region: process.env.AWS_BUCKET_REGION,
}

// Function name- SendEmail

export function sendEmailWithSES({ receiverAddress, body, subject, cc, count }: any) {
    const bccEmail = process.env.BCC_EMAIL;

    const params = {
        Source: `${process.env.emailAlias} <${process.env.senderEmail}>`,
        Destination: {
            ToAddresses: [receiverAddress],
            CcAddresses: [cc],

        },
        ReplyToAddresses: [],
        Message: {
            Body: body,
            Subject: subject,
        }
    };

    new AWS.SES(SESconfig)
        .sendEmail(params)
        .promise()
        .then((res: any) => {
            // if (userId) {
            //     userUpdate(userId, { emailSend: true })
            // }
            logger.info(` ${count} Email sent to ${receiverAddress} with bcc ${bccEmail} : => ${res?.MessageId}`);
            // console.log(`Email send Response ${receiverAddress}:-`, res?.MessageId);
        })
        .catch((err: any) => {
            logger.error(`Error when send email:- ${receiverAddress}`, err)
            // console.log("Error when send email:-",);
        })

}


export async function sendEmailWithNodemeler(data: any) {
    try {

        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST_NAME, //SMTP server host name
            port: parseInt(process.env.SMTP_PORT as string), // Secure SMTP port
            secure: process.env.SMTP_SECURE === "true" ? true : false, // Use SSL
            auth: {
                user: process.env.SMTP_EMAIL, // email from env
                pass: process.env.SMTP_PASSWORD, // GoDaddy password from env
            },
        });
        const bccEmail = process.env.BCC_EMAIL;

        const mailOptions = {
            from: `"EBCOG" <${process.env.SMTP_EMAIL}>`,
            to: data?.toEmail,
            // cc: ,
            bcc: bccEmail,
            subject: data?.subject,
            text: data?.subject,
            html: data?.htmlBody,
        };

        const info = await transporter.sendMail(mailOptions);
        logger.info(`Email sent to ${data?.email} with bcc ${bccEmail} : => ${info.response}`);
    } catch (error) {
        logger.error(`Error when send email:- ${data?.email}`, error)
    }
}