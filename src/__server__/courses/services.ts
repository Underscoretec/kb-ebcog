import { NextApiRequest, NextApiResponse } from "next";
import Courses from "./model";
// import User from "./model";
import messages from "@/__server__/utils/message.json";
import { logger } from "@/__server__/utils/logger";
import errorResponse from "@/__server__/utils/errorResponse";
import { createUTCDate } from "@/__server__/utils/dateUtils";


interface ExtendApiRequest extends NextApiRequest {
    files?: Express.MulterS3.File[], user?: any
}


const create = async (req: ExtendApiRequest, res: NextApiResponse) => {
    logger.info(`[COURSES-001] Course create api call`);
    const { name, overView, category, duration, type, discountStartDate, discountEndDate, discountValue, price, currency, leadInstructor, faculties, date, } = req.body
    try {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const cImage = req.files?.["courseThumbnail"]?.[0];
        const priceObj = {
            base: price && Number(price) || 0,
            currency: currency || "AED",
        }

        const discountObj = {
            value: discountValue && Number(discountValue) || 0,
            startDate: discountStartDate && createUTCDate(discountStartDate),
            endDate: discountEndDate && createUTCDate(discountEndDate),
        }

        const createObj = {
            name: name,
            overView: overView && JSON.parse(overView),
            category: category,
            duration: duration,
            type: type,
            courseThumbnail: cImage,
            price: priceObj,
            discount: discountObj,
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

const list = async (req: ExtendApiRequest, res: NextApiResponse) => {
    logger.info(`[COURSES-002] Get course api call`);
    try {
        const dataPerPage = Number(req.query?.dataPerPage) || 25;
        const page = Number(req.query?.page) || 1;
        const searchString = req.query?.string
        const category = req.query?.category;
        const query: any = {
            enabled: 1
        }
        if (searchString) {
            query["$or"] = [
                { name: { $regex: searchString, $options: "i" } },
            ];
        }
        if (category) {
            query['category'] = { $regex: category, $options: "i" };
        }

        const courseList = await Courses.find(query).select(["-enabled", "-createdBy", "-__v", "-updatedBy"])
            .sort({ createdAt: -1 }).skip(dataPerPage * (page - 1)).limit(dataPerPage);
        const courseCount = await Courses.countDocuments(query);
        if (courseList?.length > 0) {
            return res.status(200).json({
                message: messages["COURSES_FOUND"],
                error: false,
                code: "COURSES_FOUND",
                result: courseList,
                dataCount: courseCount
            });
        } else {
            return res.status(404).json({
                message: messages["COURSES_NOT_FOUND"],
                error: false,
                code: "COURSES_NOT_FOUND",
                result: []
            });
        }

    } catch (error) {
        logger.error(error, "[COURSES-002] Error in get Courses list")
        return res.status(500).json(errorResponse(error));
    }
}

const courseDetails = async (req: ExtendApiRequest, res: NextApiResponse) => {
    logger.info(`[COURSES-003] Single Course Details api call`);
    try {
        const course = await Courses.findOne({
            _id: req.query.id, enabled: 1
        })
        if (course) {

            return res.status(200).json({
                message: messages["COURSE_FOUND"],
                error: false,
                code: "COURSE_FOUND",
                result: course
            })

        } else {
            return res.status(404).json({
                message: messages["COURSE_NOT_FOUND"],
                error: false,
                code: "COURSE_NOT_FOUND",
            })
        }

    } catch (error) {
        logger.error("[COURSES-003] Error when single course details api called")
        return res.status(500).json(errorResponse(error));
    }
}



export default {
    create,
    list,
    courseDetails
}