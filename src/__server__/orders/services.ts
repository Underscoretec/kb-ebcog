import { NextApiRequest, NextApiResponse } from "next";
import CourseModel from "@/__server__/courses/model";
import messages from "@/__server__/utils/message.json";
import { logger } from "@/__server__/utils/logger";
import errorResponse from "@/__server__/utils/errorResponse";
import OrderModel from "@/__server__/orders/model";
import { razPaymentOrderCreate } from '@/__server__/payments/services';
// import CartModel from "@/__server__/cart/model";
import { isValidPeriod } from "@/__server__/utils/dateUtils";


const createNewOrder = async (req: NextApiRequest, res: NextApiResponse) => {
    logger.info("[Orders 001] Create order api called");
    try {
        const { userId, courseId, paymentType, item, currency } = req.body;

        if (courseId && userId) {
            const courseData = await CourseModel.findById(courseId);
            if (!courseData) {
                return res.status(404).json({
                    message: messages["COURSE_NOT_FOUND"],
                    error: false,
                    code: "COURSE_NOT_FOUND",
                })
            }
            const payableAmount = isValidPeriod(courseData?.discount?.startDate, courseData?.discount?.endDate) ? (courseData?.price?.base - courseData?.discount?.value) : courseData?.price?.base;
            const orderId = `#EB-Dip-${Date.now()}`;
            const itemsArray = [];
            itemsArray.push(item);

            const orderData: any = {
                orderId: orderId,
                items: itemsArray,
                paymentType: paymentType,
                userId: userId,
                basePrice: courseData?.price?.base,
                payableAmount: payableAmount,
                orderStatus: { status: 'created', timeStamp: new Date() },
                paymentStatus: { status: 'pending', timeStamp: new Date() },
                currency: currency,
                createdBy: userId,
                createdAt: new Date()
            };
            if (isValidPeriod(courseData?.discount?.startDate, courseData?.discount?.endDate)) {
                orderData.discountAmount = courseData?.discount?.value;
            }
            // create a new order
            const createOrder = await new OrderModel(orderData).save();

            let razPaymentOrder: any
            if (process.env.PAYMENT_GATEWAY === "razorpay") {
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                razPaymentOrder = await razPaymentOrderCreate({
                    orderId: createOrder?.orderId,
                    currency: createOrder?.currency,
                    amount: createOrder?.payableAmount
                })
            } else {
                // For other payment gateway
            }
            // const cart = await CartModel.findOne({ createdBy: userId });
            // if (cart) {
            //     cart.items = [];
            //     await cart.save();
            // }
            console.log(razPaymentOrder, '>>>>>> razPaymentOrderCreate');

            return res.status(201).json({
                message: messages["ORDER_CREATED"],
                code: "ORDER_CREATED",
                result: {
                    _id: createOrder?._id,
                    paymentOrderId: razPaymentOrder?.id,
                    payableAmount: createOrder?.payableAmount,
                    orderId: createOrder?.orderId
                }
            });
        } else {
            return res.status(400).json({
                message: messages["BAD_REQUEST"],
                error: false,
                code: "BAD_REQUEST",
            })
        }

    } catch (error) {
        errorResponse(error);
    }
};

const list = async (req: any, res: NextApiResponse) => {
    logger.info(`[Orders 002] Orders list api call`);
    try {
        const dataPerPage = Number(req.query?.dataPerPage) || 25;
        const page = Number(req.query?.page) || 1;
        if (req?.user?.role === "admin") {
            const query: any = {
                // enabled: 1,
            }

            if (req.query.string) {
                query["$or"] = [
                    { orderId: { $regex: req.query.string, $options: "i" } },
                    // { email: { $regex: req.query.string, $options: "i" } },
                    // { whatsAppNumber: { $regex: req.query.string, $options: "i" } },
                    // { courseName: {$regex: req.query.string, $options: "i"}}
                ];
            }

            const orders = await OrderModel.find(query).populate([
                {
                    path: 'userId', select: "first_name last_name email role phoneNo"
                },
                {
                    path: 'items', select: "-enabled -createdBy -createAt -updateAt -__v",
                    populate: [
                        {
                            path: 'courseId', select: "-enabled -createdBy -createAt -updateAt -__v"
                        }
                    ]
                },
                {
                    path: 'createdBy', select: "first_name last_name email role phoneNo"
                },
            ]).select(["-__v",]).sort({ createdAt: -1 }).skip(dataPerPage * (page - 1)).limit(dataPerPage);
            const ordersCount = await OrderModel.countDocuments(query);

            if (orders?.length > 0) {
                return res.status(200).json({
                    message: messages["ORDERS_FOUND"],
                    error: false,
                    code: "ORDERS_FOUND",
                    result: orders,
                    dataCount: ordersCount
                });
            } else {
                return res.status(404).json({
                    message: messages["ORDERS_NOT_FOUND"],
                    error: false,
                    code: "ORDERS_NOT_FOUND",
                    result: []
                });
            }
        } else {
            return res.status(401).send({
                error: true,
                code: "UNAUTHORIZED",
                message: messages["UNAUTHORIZED"]
            })
        }
    } catch (error) {
        logger.error(error, "[Orders 002] Error when get all orders list");
        return errorResponse(error);
    }
}

const getOrdersDetails = async (req: NextApiRequest, res: NextApiResponse) => {
    logger.info('[Orders 003] Orders details api call');
    // const orderId = req.query?.orderId;
    const orderId = '#EB-Dip-1734610976974';

    try {
        if (!orderId) {
            return res.status(400).json({
                message: messages["BAD_REQUEST"],
                error: true,
                code: "BAD_REQUEST",
            })
        }

        const findOrder = OrderModel.findOne({ "orderId": orderId }).exec();
        //     .populate([
        //     {
        //         path: 'userId', select: "first_name last_name email role phoneNo"
        //     },
        //     {
        //         path: 'items', select: "-enabled -createdBy -createAt -updateAt -__v",
        //         populate: [
        //             {
        //                 path: 'courseId', select: "-enabled -createdBy -createAt -updateAt -__v"
        //             }
        //         ]
        //     },
        //     {
        //         path: 'createdBy', select: "first_name last_name email role phoneNo"
        //     },
        // ]).exec();
        console.log(findOrder,' findOrder >>>>>>>>>');

        if (!findOrder) {
            return res.status(404).json({
                message: messages["ORDER_NOT_FOUND"],
                error: false,
                code: "ORDER_NOT_FOUND",
                result:{}
            });
        }

        return res.status(200).json({
            message: messages["ORDER_FOUND"],
            error: false,
            code: "ORDER_FOUND",
            result: findOrder,
        })

    } catch (error) {
        logger.error(error, "[Orders 003] Error when order details get");
        return errorResponse(error);
    }

}

export default {
    createNewOrder,
    list,
    getOrdersDetails
}