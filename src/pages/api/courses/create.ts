 /* eslint-disable @typescript-eslint/ban-ts-comment */
import connectDB from "@/__server__/database/index";
import { NextApiResponse } from "next";
import { createRouter } from "next-connect";
import courseService from "@/__server__/courses/services"
import uploadMiddleware from "@/__server__/middleware/uploadMiddleware";
import ExtendNextApiRequest from "@/__server__/utils/extendRequest";
import errorHandler from "@/__server__/utils/errorHandler";
import noMatchHandler from "@/__server__/utils/noMatchHandler";

//endpoint: api/courses/create

// create api router with next-connect
const router = createRouter<ExtendNextApiRequest, NextApiResponse>();

// connect Database
connectDB();

const uploadFields = [
    { name: "courseThumbnail", maxCount: 1 },
];

// @ts-ignore
// Route to create course
router.use(uploadMiddleware.fields(uploadFields)).post(courseService.create);

export const config = { api: { bodyParser: false } };

// create a handler from router with custom onError and onNoMatch
export default router.handler({
  onError: errorHandler,
  onNoMatch: noMatchHandler,
});