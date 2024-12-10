import * as AWS from "aws-sdk";
// import userUpdate from "../utils/userUpdate";

//Amazon SES configuration
const SESconfig = {
    apiVersion: "2024-12-05",
    accessKeyId: process.env.AWS_SES_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SES_SECRET_KEY,
    region: process.env.AWS_BUCKET_REGION,
}

// Function name- SendEmail

export function sendEmail({ receiverAddress, body, subject, cc, }: any) {
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
            console.log(`Email send Response ${receiverAddress}:-`, res?.MessageId);
        })
        .catch((err: any) => {
            console.log("Error when send email:-", err);
        })

}