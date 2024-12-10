import { NextApiRequest, NextApiResponse } from "next";
import CampaignsModel from "./model";
import messages from "@/__server__/utils/message.json";
import { logger } from "@/__server__/utils/logger";
import errorResponse from "@/__server__/utils/errorResponse";
// eslint-disable-next-line @typescript-eslint/no-require-imports
const XLSX = require('xlsx');


const addData = async (req: NextApiRequest,res: NextApiResponse) => {
    try {
        logger.info("Call addData function");
        if (req?.query?.seedType === 'uploadExcel') {
            const workbook = XLSX.readFile('files/FOGSI_MembersList.xlsx');
            const sheet_name_list = workbook.SheetNames;
            const datas = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);
            console.log(datas, '>>>>>>>>>>>XLSX data');
        // eslint-disable-next-line prefer-const
        let modifyCodes: any = []
            
            await Promise.all(datas?.map((user: any) => {
                    modifyCodes.push({
                        firstName: user?.firstName,
                        lastName: user?.lastName,
                        fullName: `${user?.firstName} ${user?.lastName}`,
                        email: user?.email,
                        batchNo: user?.batchNo,
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
        console.log(modifyCodes,'>>>>>>>>>>>modifyCodes');
            

            if (modifyCodes?.length > 0) {
                // console.log(modifyCodes.length, "codesArr")
                const campaignsList = await CampaignsModel.insertMany(modifyCodes)
                console.log(campaignsList?.length, `Campaign list saved successfully >>>>>>>>`); 
                if(campaignsList){
                        return res.status(201).json({
                            message: messages['CAMPAIGN_DATA_CREATED'],
                            error: false,
                            code: 'CAMPAIGN_DATA_CREATED',
                            // result: campaignsList
                        });
                }
    
            }

            
        }

        
    } catch (error) {
        logger.error(error, "[Campaign upload -001] Error uploadnew Campaign! ");
        return res.status(500).json(errorResponse(error));
    }

}

const unSubscribeEmail = async (req: NextApiRequest, res: NextApiResponse) => {
    const { id, value } = req.body;
    try {
        logger.info("Call addData function");
        const campaign = await CampaignsModel.findOne({ _id: id})
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
        const campaign = await CampaignsModel.findOne({ _id: id})
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
    addData,
    unSubscribeEmail,
    requestForCallback
}