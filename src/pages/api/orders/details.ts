import { createRouter } from "next-connect";
import { NextApiRequest, NextApiResponse } from "next";
import connectDB from "@/__server__/database";
import orderService from "@/__server__/orders/services"
import errorHandler from "@/__server__/utils/errorHandler";
import noMatchHandler from "@/__server__/utils/noMatchHandler";
import verifyToken from "@/__server__/middleware/verifyToken";

//endpoint: api/orders/details

const router = createRouter<NextApiRequest, NextApiResponse>();

connectDB();

router.use(verifyToken).get(orderService.getOrdersDetails);

export default router.handler({
    onError: errorHandler,
    onNoMatch: noMatchHandler,
})