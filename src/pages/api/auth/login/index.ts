import connectDB from "@/__server__/database/index";
import { NextApiRequest, NextApiResponse } from "next";
import { createRouter } from "next-connect";
import userService from "@/__server__/users/services";
import errorHandler from "@/__server__/utils/errorHandler";
import noMatchHandler from "@/__server__/utils/noMatchHandler";
// import { NextApiResponseServerIO } from "@/src/types/next";


// create api router with next-connect
const router = createRouter<NextApiRequest, NextApiResponse>();

// connect Database
connectDB();

// Route for login
router.post(userService.login);


// create a handler from router with custom onError and onNoMatch
export default router.handler({
    onError: errorHandler,
    onNoMatch: noMatchHandler,
});