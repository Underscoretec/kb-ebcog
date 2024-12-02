/* eslint-disable @typescript-eslint/ban-ts-comment */
import connectDB from "@/__server__/database/index";
import { NextApiResponse } from "next";
import { createRouter } from "next-connect";
import registrationService from "@/__server__/registration/services"
import uploadMiddleware from "@/__server__/middleware/uploadMiddleware";
import ExtendNextApiRequest from "@/__server__/utils/extendRequest";
import errorHandler from "@/__server__/utils/errorHandler";
import noMatchHandler from "@/__server__/utils/noMatchHandler";

// create api router with next-connect
const router = createRouter<ExtendNextApiRequest, NextApiResponse>();

// connect Database
connectDB();

const uploadFields = [
    { name: "latestDegreeCertificate", maxCount: 1 },
    { name: "basicDegreeDocument", maxCount: 1 },
];

// @ts-ignore

// Route to create eBook metadata
router.use(uploadMiddleware.fields(uploadFields)).post(registrationService.courseRegistration);

export const config = { api: { bodyParser: false } };
// create a handler from router with custom onError and onNoMatch
export default router.handler({
  onError: errorHandler,
  onNoMatch: noMatchHandler,
});