import connectDB from "@/__server__/database/index";
import { NextApiRequest, NextApiResponse } from "next";
import { createRouter } from "next-connect";
import userService from "@/__server__/users/services";
// import uploadMiddleware from "@/src/__server__/middleware/uploadMiddleware";
// import ExtendNextApiRequest from "@/__server__/utils/extendRequest";
import errorHandler from "@/__server__/utils/errorHandler";
import noMatchHandler from "@/__server__/utils/noMatchHandler";

// create api router with next-connect
const router = createRouter<NextApiRequest, NextApiResponse>();

// connect Database
connectDB();

router.post(userService.signUp);

// create a handler from router with custom onError and onNoMatch
export default router.handler({
    onError: errorHandler,
    onNoMatch: noMatchHandler,
});