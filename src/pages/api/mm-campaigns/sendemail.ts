import connectDB from "@/__server__/database";
import { NextApiRequest, NextApiResponse } from "next";
import { createRouter } from "next-connect";
import campaignService from "@/__server__/mc-master-emailer/services";
import errorHandler from "@/__server__/utils/errorHandler";
import noMatchHandler from "@/__server__/utils/noMatchHandler";


const router = createRouter<NextApiRequest, NextApiResponse>();
connectDB();

router.put(campaignService.sendEmails);

export default router.handler({
    onError: errorHandler,
    onNoMatch: noMatchHandler,
})
