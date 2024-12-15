import connectDB from "@/__server__/database/index";
import { NextApiRequest, NextApiResponse } from "next";
import { createRouter } from "next-connect";
import sessionService from "@/__server__/sessions/services";
import errorHandler from "@/__server__/utils/errorHandler";
import noMatchHandler from "@/__server__/utils/noMatchHandler";

// create api router with next-connect
// endpoint: /api/sessions/create
const router = createRouter<NextApiRequest, NextApiResponse>();

// connect Database
connectDB();

router.post(sessionService.createSession);

// create a handler from router with custom onError and onNoMatch
export default router.handler({
    onError: errorHandler,
    onNoMatch: noMatchHandler,
});