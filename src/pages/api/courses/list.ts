import { createRouter } from "next-connect";
import { NextApiRequest, NextApiResponse } from "next";
import connectDB from "@/__server__/database";
import courseService from "@/__server__/courses/services"
import errorHandler from "@/__server__/utils/errorHandler";
import noMatchHandler from "@/__server__/utils/noMatchHandler";

//endpoint: api/courses/list

const router = createRouter<NextApiRequest, NextApiResponse>();

connectDB();

router.get(courseService.list);

export default router.handler({
    onError: errorHandler,
    onNoMatch: noMatchHandler,
})