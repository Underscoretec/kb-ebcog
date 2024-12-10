import { NextApiRequest, NextApiResponse } from "next";
import CampaignsModel from "./model";
import messages from "@/__server__/utils/message.json";
import { logger } from "@/__server__/utils/logger";
import errorResponse from "@/__server__/utils/errorResponse";
import { inviteUserForRegister } from "../mail/services";
// eslint-disable-next-line @typescript-eslint/no-require-imports
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

function sendWelcomeEmail() {
    throw new Error("Function not implemented.");
}
const sendEmails = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        logger.info("[Campaign sendEmails -002] sendEmails function called.")
        const emailSendProcess = process.env.EMAIL_SEND_BY
        const query: any = {
            'unsubscribe.status': false,
            'mailSent.status': false,
            enabled: 1
        }
        if (req.query.batch) {
            query.batch = req.query.batch
        }
        const campaignList = await CampaignsModel.find(query);
        console.log(campaignList, 'campaignList @@@@@@@');
        if (campaignList?.length > 0) {
            await Promise.all(campaignList.map(async (item: any, idx: number) => {
                if (item['email']) {
                    const sendData = { email: item?.email?.toLowerCase(), name: item?.fullName, id: item?._id };
                    if (idx === 0) {
                        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
                        emailSendProcess ? inviteUserForRegister(sendData) : sendWelcomeEmail();

                    } else {
                        const randomTime = await getRandomInt(15, 60)
                        // return new Promise((resolve) => {
                        setTimeout(() => {
                            if (emailSendProcess) {
                                inviteUserForRegister(sendData)
                            } else {
                                // sendWelcomeEmail(sendData);
                                }
                            }, Number(randomTime * 1000))
                        // })
                    }
                    const campaign = await CampaignsModel.findOne({ _id: item?._id, enabled: 1 });
                    if (campaign) {
                        const obj = {
                            status: true,
                            timeStamp: Date.now()
                        }
                        campaign.mailSent = obj;
                        await campaign.save();
                    }

                }
            }))

            return res.status(200).json({
                message: messages["EMAIL_FIRED"],
                error: false,
                code: "EMAIL_FIRED",
                result: campaignList
            });
        }

    } catch (error) {
        logger.error(error, "[Campaign sendEmails -002] Error in send emails!")
    }
}

const unSubscribeEmail = async (req: NextApiRequest, res: NextApiResponse) => {
    const { id, value } = req.body;
    try {
        logger.info("Call addData function");
        const campaign = await CampaignsModel.findOne({ _id: id, enabled: 1 })
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
    const { id, phoneNumber } = req.body;
    try {
        logger.info("Call addData function");
        const campaign = await CampaignsModel.findOne({ _id: id, enabled: 1 })
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
export default {
    importData,
    sendEmails,
    unSubscribeEmail,
    requestForCallback
}


