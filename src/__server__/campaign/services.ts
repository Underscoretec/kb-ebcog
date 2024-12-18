/* eslint-disable @typescript-eslint/no-require-imports */
import { NextApiRequest, NextApiResponse } from "next";
import CampaignsModel from "./model";
import messages from "@/__server__/utils/message.json";
import { logger } from "@/__server__/utils/logger";
import errorResponse from "@/__server__/utils/errorResponse";
import { inviteUserForRegister } from "../mail/services";
// eslint-disable-next-line @typescript-eslint/no-require-imports
const XLSX = require('xlsx');
const fs = require('fs');


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

    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf8', (err: any, data: any) => {
            if (err) {
                console.error('Error reading file:', err);
                reject(err);
            }

            try {
                const jsonData = JSON.parse(data);
                resolve(jsonData);
            } catch (parseError) {
                console.error('Error parsing JSON:', parseError);
                reject(parseError);
            }
        });



    })
}

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
            // if (req.query.batch) {
            //     query.batch = req.query.batch
            // }

            if (req?.query?.mailProvider === "SMTP" || req?.query?.mailProvider === "SES") {
                const campaignList = await CampaignsModel.find(query);
                console.log(campaignList?.length, 'campaignList count @@@@@@@');
                const resultJson: any = await checkAndUpdateList(`kb-email-report.json`);

                const path = 'files/Book 13.xlsx'
                const workbook = XLSX.readFile(path)
                const sheet_name_list = workbook.SheetNames;

                const excelDatas = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);

                const datas = campaignList

                if (datas?.length > 0) {
                    const checkEmails = resultJson?.data?.queue;
                    let sendMailArray: string[] = []
                    for (const [idx, item] of datas.entries()) {
                        const mailEx = excelDatas.find((data: any) => data?.email?.toLowerCase().trim() === item['email'])

                        if (item['email'] && mailEx) {

                            const fullName = `${item?.firstName} ${item?.lastName}`
                            const sendData = { email: item?.email?.toLowerCase(), name: fullName };

                            inviteUserForRegister(sendData, req, idx + 1)
                            sendMailArray.push(item?.email)

                            // Delay the next email by a random or fixed interval
                            const delay = idx === 0 ? 0 : await getRandomInt(2, 5) * 1000; // 2 to 5 seconds delay
                            await sleep(delay);

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
                                logger.info(`${campaignUpdate?.modifiedCount} emails updated in database`)

                                sendMailArray = []
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
                        logger.info(`${campaignUpdate?.modifiedCount} emails updated in database`)

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


