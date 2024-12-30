/* eslint-disable @typescript-eslint/ban-ts-comment */
import connectDB from "@/__server__/database/index";
import { NextApiRequest, NextApiResponse } from "next";
import { createRouter } from "next-connect";
import paymentService from "@/__server__/payments/services";
import errorHandler from "@/__server__/utils/errorHandler";
import noMatchHandler from "@/__server__/utils/noMatchHandler";
import verifyToken from "@/__server__/middleware/verifyToken";
import adminChecker from "@/__server__/middleware/adminChecker";

//endpoint: api/payments/list

// create api router with next-connect
const router = createRouter<NextApiRequest, NextApiResponse>();

// connect Database
connectDB();

// @ts-ignore
// Route to get payments list
router.use(verifyToken).use(adminChecker).get(paymentService.list);

// create a handler from router with custom onError and onNoMatch
export default router.handler({
    onError: errorHandler,
    onNoMatch: noMatchHandler,
});