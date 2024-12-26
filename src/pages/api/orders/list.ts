import { createRouter } from "next-connect";
import { NextApiRequest, NextApiResponse } from "next";
import connectDB from "@/__server__/database";
import orderService from "@/__server__/orders/services"
import errorHandler from "@/__server__/utils/errorHandler";
import noMatchHandler from "@/__server__/utils/noMatchHandler";
import verifyToken from "@/__server__/middleware/verifyToken";
import adminChecker from "@/__server__/middleware/adminChecker";

//endpoint: api/orders/list

const router = createRouter<NextApiRequest, NextApiResponse>();

connectDB();

router.use(verifyToken).use(adminChecker).get(orderService.list);

export default router.handler({
    onError: errorHandler,
    onNoMatch: noMatchHandler,
})