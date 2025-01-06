/* eslint-disable @typescript-eslint/no-require-imports */
import { NextApiRequest, NextApiResponse } from "next";
import CampaignsModel from "./model";
import messages from "@/__server__/utils/message.json";
import { logger } from "@/__server__/utils/logger";
import errorResponse from "@/__server__/utils/errorResponse";
import { inviteUserForRegister } from "../mail/services";
// eslint-disable-next-line @typescript-eslint/no-require-imports
import fs from 'fs/promises';
const XLSX = require('xlsx');



const importData = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        logger.info("[Campaign importData -001] Call importData function");
        if (req?.query?.fileType === 'uploadExcel') {
            const workbook = XLSX.readFile('files/FOGSI_MembersList.xlsx');
            const sheet_name_list = workbook.SheetNames;
            const datas = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);
            console.log(datas, '>>>>>>>>>>>XLSX data');
            const modifyCodes: any = []

            await Promise.all(datas?.map((user: any) => {
                modifyCodes.push({
                    firstName: user?.firstName,
                    lastName: user?.lastName,
                    fullName: `${user?.firstName} ${user?.lastName}`,
                    email: user?.email,
                    batch: user?.batch,
                    societyName: user?.societyName,
                    addressLine1: user?.addressLine1,
                    addressLine2: user?.addressLine2,
                    addressLine3: user?.addressLine3,
                    town: user?.town,
                    city: user?.city,
                    state: user?.state,
                    pinCode: user?.pinCode,
                    zoneName: user?.zoneName,

                })
            }))
            console.log(modifyCodes, '>>>>>>>>>>>modifyCodes');


            if (modifyCodes?.length > 0) {
                const campaignsList = await CampaignsModel.insertMany(modifyCodes, { ordered: false })
                console.log(campaignsList?.length, `Campaign list saved successfully >>>>>>>>`);
                if (campaignsList) {
                    return res.status(201).json({
                        message: messages['CAMPAIGN_DATA_CREATED'],
                        error: false,
                        code: 'CAMPAIGN_DATA_CREATED',
                        // result: campaignsList
                    });
                }
            }
        } else {
            res.status(400).json({
                error: true,
                result: "The request is invalid or cannot be processed"
            })
        }


    } catch (error) {
        logger.error(error, "[Campaign importData -001] Error in import data from xlsx! ");
        return res.status(500).json(errorResponse(error));
    }

}
function getRandomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const checkAndUpdateList = async (fileName: string) => {
    const filePath = `files/${fileName}`;

    try {
        // Check if the file exists
        try {
            await fs.access(filePath); // Throws if the file doesn't exist
        } catch (err: any) {
            if (err.code === 'ENOENT') {
                console.error('File not found:', filePath);
                return null; // Return null to indicate missing file
            }
            throw err; // Re-throw unexpected errors
        }

        // Read and parse the file if it exists
        const data = await fs.readFile(filePath, 'utf8');
        return JSON.parse(data); // Return parsed JSON if successful
    } catch (err) {
        console.error('Error reading or parsing file:', err);
        throw err; // Re-throw the error for the caller to handle
    }
};



const createBatch = async (newEmail: string, type: string): Promise<void> => {
    const path = `files/batch-data.json`;

    try {
        console.log(newEmail, type, "Check type 001");

        let jsonData: { batchEmail: string[] } = { batchEmail: [] }; // Default structure

        // Try to read the file
        try {
            const data = await fs.readFile(path, 'utf8');
            logger.info("Data before parsing", data);

            // Parse data or initialize to default
            jsonData = data.trim() ? JSON.parse(data) : { batchEmail: [] };
        } catch (err: any) {
            if (err.code === 'ENOENT') {
                logger.info('File does not exist. Initializing with default structure...');
            } else {
                logger.error('Error reading file:', err);
                throw err; // Propagate unexpected errors
            }
        }

        // console.log(jsonData, "Initial jsonData.batchEmail");

        // Update JSON based on the type
        if (type === "empty") {
            jsonData = { batchEmail: [] };
        } else if (!jsonData.batchEmail.includes(newEmail)) {
            // Ensure the email doesn't already exist
            jsonData.batchEmail.push(newEmail);
        }

        // console.log(jsonData, "Updated jsonData.batchEmail");

        // Write the updated JSON back to the file
        await fs.writeFile(path, JSON.stringify(jsonData, null, 2));
        logger.info('File created/updated successfully.');
    } catch (error) {
        logger.error('Error in createBatch function:', error);
    }
};



const sendEmails = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        logger.info("[Campaign sendEmails -002] sendEmails function called.")
        if (req.query.sync === 'safe') {
            // const resultJson: any = await checkAndUpdateList(`kb-email-report.json`);
            // const checkEmails = resultJson?.data?.queue;
            // console.log(resultJson?.data?.queue.find((item: any) => item?.email === "pranathiaravind@gmail.com").status, 'resultJson ###');
            // const emailStatus = checkEmails?.find((jsonItem: any) => { return jsonItem?.email === "ankita@gmail.com" })?.status
            // console.log(emailStatus, "emailStatus")
            // if ("bhaskar.bonu@utplco.com" && emailStatus === 'safe') {
            //     console.log("call >> for mail send")
            // }
        } else {
            const query: any = {
                'mailSent.status': false,
                enabled: 1
            }

            if (req?.query?.mailProvider === "SMTP" || req?.query?.mailProvider === "SES") {
                const batchemails: any = await checkAndUpdateList(`batch-data.json`);

                if (batchemails?.batchEmail?.length > 0) {
                    logger.info(`Updateing exist batch ${batchemails?.batchEmail?.length} success emails`)

                    const campaignUpdate = await CampaignsModel.updateMany({ email: { $in: batchemails?.batchEmail } },
                        {
                            $set: {
                                mailSent: {
                                    status: true,
                                    timeStamp: Date.now()
                                }
                            }
                        },
                        { new: true }
                    )

                    logger.info(`Exist Batch Data: -> ${campaignUpdate?.modifiedCount} emails updated in database`)
                    createBatch('', "empty")  //Create batch file
                }

                const campaignList = await CampaignsModel.find(query);
                console.log(campaignList?.length, 'campaignList count @@@@@@@');
                const resultJson: any = await checkAndUpdateList(`kb-email-report.json`);

                const datas = campaignList

                if (datas?.length > 0) {
                    const checkEmails = resultJson?.data?.queue;
                    let sendMailArray: string[] = []
                    let batchNo: number = 1
                    for (const [idx, item] of datas.entries()) {
                        const emailStatus = checkEmails?.find((jsonItem: any) => jsonItem?.email === item['email'])?.status

                        if (item['email'] && emailStatus === 'safe') {

                            const fullName = `${item?.firstName} ${item?.lastName}`
                            const sendData = { email: item?.email?.toLowerCase(), name: fullName };

                            inviteUserForRegister(sendData, req, idx + 1)
                            sendMailArray.push(item?.email)
                            // Delay the next email by a random or fixed interval
                            const delay = idx === 0 ? 0 : await getRandomInt(1, 3) * 1000; // 2 to 5 seconds delay
                            await sleep(delay);
                            createBatch(item?.email, "create")  //Create batch file

                            if (sendMailArray?.length === 100) {
                                logger.info(`Updateing ${sendMailArray?.length} success emails`)

                                const campaignUpdate = await CampaignsModel.updateMany({ email: { $in: sendMailArray } },
                                    {
                                        $set: {
                                            mailSent: {
                                                status: true,
                                                timeStamp: Date.now()
                                            }
                                        }
                                    },
                                    { new: true }
                                )
                                logger.info(`Batch no: ${batchNo} -> ${campaignUpdate?.modifiedCount} emails updated in database`)
                                batchNo += 1
                                sendMailArray = []
                                createBatch('', "empty")  //Create batch file
                            }
                        }
                    }

                    if (sendMailArray?.length > 0) {
                        logger.info(`Updateing ${sendMailArray?.length} success emails`)

                        const campaignUpdate = await CampaignsModel.updateMany({ email: { $in: sendMailArray } },
                            {
                                $set: {
                                    mailSent: {
                                        status: true,
                                        timeStamp: Date.now()
                                    }
                                }
                            },
                            { new: true }
                        )
                        logger.info(`Proccess end [Last batch update]-> ${campaignUpdate?.modifiedCount} emails updated in database`)
                        createBatch('', "empty")  //Create batch file

                        return res.status(200).json({
                            message: messages["EMAIL_FIRED"],
                            error: false,
                            code: "EMAIL_FIRED",
                            result: campaignUpdate
                        });
                    }

                } else {
                    return res.status(400).json({
                        message: messages["EMAIL_SEND_EXCEL_FILE_EMPTY"],
                        error: true,
                        code: "EMAIL_SEND_EXCEL_FILE_EMPTY",
                        result: {}
                    });
                }
            } else {
                return res.status(400).json({
                    message: messages["MAIL_PROVIDER_REQUIRED"],
                    error: true,
                    code: "MAIL_PROVIDER_REQUIRED",
                    result: {}
                });
            }
        }
    } catch (error) {
        logger.error(error, "[Campaign sendEmails -002] Error in send emails!")
        return res.status(400).json({
            message: messages["INTERNAL_SERVER_ERROR"],
            error: true,
            code: "INTERNAL_SERVER_ERROR",
            result: error
        });
    }
}

const unSubscribeEmail = async (req: NextApiRequest, res: NextApiResponse) => {
    const { email, value } = req.body;
    try {
        logger.info("Call addData function");
        const campaign = await CampaignsModel.findOne({ email: email, enabled: 1 })
        if (!campaign) {
            return res.status(404).json({
                message: messages["CAMPAIGN_NOT_FOUND"],
                error: true,
                code: "CAMPAIGN_NOT_FOUND",
                result: {}
            })
        } else {
            if (value) {
                const obj = {
                    status: true,
                    timeStamp: Date.now()
                }
                campaign.unsubscribe = obj;
                const updateCampaign = await campaign.save();

                if (updateCampaign) {


                    return res.status(200).json({
                        message: messages["EMAIL_UNSUBSCRIBED"],
                        error: false,
                        code: "EMAIL_UNSUBSCRIBED",
                        result: updateCampaign
                    })
                }

            }
        }



    } catch (error) {
        logger.error(error, "[Campaign upload -001] Error unSubscribe Campaign! ");
        return res.status(500).json(errorResponse(error));
    }

}

const requestForCallback = async (req: NextApiRequest, res: NextApiResponse) => {
    const { email, phoneNumber } = req.body;
    try {
        logger.info("Call addData function");
        const campaign = await CampaignsModel.findOne({ email: email, enabled: 1 })
        if (!campaign) {
            return res.status(404).json({
                message: messages["CAMPAIGN_NOT_FOUND"],
                error: true,
                code: "CAMPAIGN_NOT_FOUND",
                result: {}
            })
        } else {
            if (phoneNumber) {
                const obj = {
                    phone: phoneNumber,
                    timeStamp: Date.now()
                }
                campaign.phoneNo = obj;
                const updateCampaign = await campaign.save();

                if (updateCampaign) {
                    return res.status(200).json({
                        message: messages["CALLBACK_REQUEST_SEND"],
                        error: false,
                        code: "CALLBACK_REQUEST_SEND",
                        result: updateCampaign
                    })
                }

            }
        }
    } catch (error) {
        logger.error(error, "[Campaign upload -001] Error in Campaign callback create! ");
        return res.status(500).json(errorResponse(error));
    }

}

const successEmailUpdate = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const resultJson: any = await checkAndUpdateList(`success_emails.json`);
        console.log(resultJson, "resultJson")
        if (resultJson?.successSendEmail?.length > 0) {
            logger.info(`Updateing ${resultJson?.successSendEmail.length} success emails`)
            const campaignUpdate = await CampaignsModel.updateMany({ email: { $in: resultJson?.successSendEmail } },
                {
                    $set: {
                        mailSent: {
                            status: true,
                            timeStamp: Date.now()
                        }
                    }
                },
                { new: true }
            )
            if (campaignUpdate) {
                logger.info(`Emails updated in database -> `, campaignUpdate.modifiedCount)
                return res.status(200).json({
                    message: messages["EMAIL_UPDATED"],
                    error: false,
                    code: "EMAIL_UPDATED",
                    result: campaignUpdate
                });
            }

        } else {
            return res.status(404).json({
                message: messages["FILE_NOT_FOUND"],
                error: true,
                code: "FILE_NOT_FOUND",
                result: null
            })
        }

    } catch (error) {
        logger.error(error, "[SuccessEmailUpdate -01] Error in success email update ");
        return res.status(500).json(errorResponse(error));
    }
}
export default {
    importData,
    sendEmails,
    unSubscribeEmail,
    requestForCallback,
    successEmailUpdate
}


