import { NextApiRequest, NextApiResponse } from "next";
import CourseModel from "@/__server__/courses/model";
import messages from "@/__server__/utils/message.json";
import { logger } from "@/__server__/utils/logger";
import errorResponse from "@/__server__/utils/errorResponse";
import OrderModel from "@/__server__/orders/model";
import { razPaymentOrderCreate } from '@/__server__/payments/services';
import CartModel from "@/__server__/cart/model";
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
            const payableAmount = isValidPeriod(courseData?.discount?.startDate, courseData?.discount?.endDate)? (courseData?.price?.base - courseData?.discount?.value) : courseData?.price?.base;
            const orderId = `#EB-Dip-${Date.now()}`;
            const itemsArray = [];
            itemsArray.push(item);

            const orderData = {
                orderId: orderId,
                items: itemsArray,
                paymentType: paymentType,
                userId: userId,
                payableAmount: payableAmount,
                orderStatus: { status: 'created', timeStamp: new Date() },
                paymentStatus: { status: 'pending', timeStamp: new Date() },
                currency: currency,
            };
            // create a new order
            const createOrder = await new OrderModel(orderData).save();

            let razPaymentOrder: any
            if (process.env.PAYMENT_GATEWAY === "razorpay") {
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                razPaymentOrder = await razPaymentOrderCreate({
                    orderId: createOrder?._id,
                    currency: createOrder?.currency,
                    amount: createOrder?.payableAmount
                })
            } else {

            }
            const cart = await CartModel.findOne({ createdBy: userId });
            if (cart) {
                cart.items = [];
                await cart.save();
            }
            console.log(razPaymentOrder,'>>>>>> razPaymentOrderCreate');

            return res.status(201).json({
                message: messages["ORDER_CREATED"],
                code:"ORDER_CREATED",
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

export default {
    createNewOrder
}