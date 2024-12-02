import { NextApiRequest, NextApiResponse } from "next";
import Courses from "./model";
// import User from "./model";
import messages from "@/__server__/utils/message.json";
import { logger } from "@/__server__/utils/logger";
import errorResponse from "@/__server__/utils/errorResponse";


interface ExtendApiRequest extends NextApiRequest {
    files?: Express.MulterS3.File[], user?: any
}


const create = async (req: ExtendApiRequest, res: NextApiResponse) => {
    logger.info(`[COURSES-001] Course create api call`);
    const { name, overView, duration, price, leadInstructor,faculties,date, } = req.body
    try {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const cImage = req.files?.["coverImage"]?.[0];

        const createObj = {
            name: name,
            overView: overView && JSON.parse(overView),
            duration: duration,
            coverImage: cImage,
            price: price,
            leadInstructor: leadInstructor,
            faculties: faculties,
            date: date && JSON.parse(date),
            createdBy: req.user?._id,
            createdAt: Date.now(),
        }

        const saveCourses = await new Courses(createObj).save();
        


        return res.status(201).json({
            message: messages['COURSES_SAVED'],
            error: false,
            code: 'COURSES_SAVED',
            result: saveCourses
        });

    } catch (error) {
        
        logger.error(error, "[COURSES-001] Error in adding Courses")
        return res.status(500).json(errorResponse(error));
    }
}



export default {
    create
}