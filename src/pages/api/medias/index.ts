import connectDB from "@/__server__/database/index";
import { NextApiRequest, NextApiResponse } from "next";
import { createRouter } from "next-connect";
import errorHandler from "@/__server__/utils/errorHandler";
import noMatchHandler from "@/__server__/utils/noMatchHandler";
import axios from "axios";
import errorResponse from "@/__server__/utils/errorResponse";
const nodeEnv = process.env.NODE_ENV!;
const appName = process.env.APP_NAME!;

const getImage = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const width: any = req.query.width || 1024;
        const height: any = req.query.height
        const imageKey: any = req.query.key;
        const image = JSON.stringify({
            bucket: process.env.AWS_BUCKET_NAME,
            key: `${appName}/${nodeEnv}/${imageKey}`,
            edits: {
                resize: {
                    width: parseInt(width),
                    height: parseInt(height),
                    fit: req.query.fit || 'contain',
                },
            },
        });
        // console.log(image,'image >>>>');
        const cdnImage: any = btoa(image);
        const url = `${process.env.CDN_URL}/${cdnImage}`;
        // console.log(url, "url %%%%%%")
        const axiosObj = await axios({
            url,
            method: "GET",
            responseType: "stream",
        });
        // console.log(axiosObj, "axiosObj >>>>>")
        return axiosObj.data.pipe(res);
    } catch (error) {
        errorResponse(error);
    }
};

const router = createRouter<NextApiRequest, NextApiResponse>();

connectDB();

// Route to get medias
router.get(getImage);


// create a handler from router with custom onError and onNoMatch
export default router.handler({
    onError: errorHandler,
    onNoMatch: noMatchHandler,
});