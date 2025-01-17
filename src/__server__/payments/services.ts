/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable @typescript-eslint/no-require-imports */
import Razorpay from 'razorpay';
import OrderModel from "@/__server__/orders/model";
import PaymentModel from "@/__server__/payments/model";
import CartModel from "@/__server__/cart/model";
import UserModel from "@/__server__/users/model";
import errorResponse from "@/__server__/utils/errorResponse";
import { NextApiRequest, NextApiResponse } from 'next';
import messages from "@/__server__/utils/message.json";
import { logger } from "@/__server__/utils/logger";
const Crypto = require('crypto');

// import errorResponse from "@/__server__/utils/errorResponse";

const instance = new Razorpay({
  key_id: process.env.RZP_PAYMENT_KEY!, key_secret: process.env.RZP_PAYMENT_SECRET!
})

export async function razPaymentOrderCreate(data: any) {
  logger.info("[Payment 001] razPaymentOrderCreate called");
  try {
    console.log(data, ">>>> data from order create api")
    const options = {
      amount: (data?.amount * 100),  // amount in the smallest currency unit
      currency: data?.currency,
      receipt: data?.orderId  // orderId save in order model
    };
    const rzpOrder = await instance.orders.create(options)
    if (rzpOrder) {
      const orderupdate = await OrderModel.findOneAndUpdate(
        { orderId: data?.orderId.toString() },
        { $set: { razOrderId: rzpOrder.id } },
        { new: true },
      )
      console.log(orderupdate, '>>>>>   orderupdate');
      return rzpOrder;
    }
    else {
      throw new Error("RAZORPAY_ORDER_NOT_CREATED")
    }

  } catch (error) {
    errorResponse(error);
  }

}

async function paymentVerify(req: NextApiRequest, res: NextApiResponse) {
  logger.info("[Payment 002] Verify payment api called");
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature, id, customerId, amount } = req.body;
    const order = await OrderModel.findById(id);
    if (!order) {
      return res.status(404).json({
        message: messages["ORDER_NOT_FOUND"],
        error: false,
        code: "ORDER_NOT_FOUND",
      })
    }
    const signature = razorpay_order_id + "|" + razorpay_payment_id;

    const generated_signature = Crypto.createHmac('sha256', process.env.RZP_PAYMENT_SECRET).update(signature).digest('hex');
    if (razorpay_signature === generated_signature) {

      const payment = await PaymentModel.create({
        customerId: customerId,
        status: "success",
        gateway: process.env.PAYMENT_GATEWAY,
        type: "online",
        amount: amount,
        signature: razorpay_signature,
        paymentId: razorpay_payment_id,
        paidAt: new Date()
      });

      order.paymentId = payment?._id;
      order.paymentStatus = { status: 'success', timeStamp: new Date() };
      const savedOrder = await order.save();
      console.log(savedOrder,'savedOrder >>>>>');
      const updatedOrder = await savedOrder.populate(['paymentId', 'userId']);
      console.log(updatedOrder,'updatedOrder $$$$$$');
      if (updatedOrder?.paymentStatus?.status === 'success') {

        await UserModel.findOneAndUpdate(
          { _id: customerId },
          {$set: {enrolledCourse: updatedOrder?.items[0]?.courseId}}
        )

        const cart = await CartModel.findOne({ createdBy: customerId });
        if (cart) {
          cart.items = [];
          await cart.save();
        }
        
      }

      return res.status(201).json({
        message: messages["PAYMENT_SUCCESS"],
        code: "PAYMENT_SUCCESS",
        result: updatedOrder
    });

    } else {
      const payment = await PaymentModel.create({
        customerId: customerId,
        status: 'failed',
        gateway: process.env.PAYMENT_GATEWAY,
        type: "online",
        amount: amount,
        signature: razorpay_signature,
        paymentId: razorpay_payment_id,
      });

      order.paymentId = payment?._id;
      order.paymentStatus = { status: 'failed', timeStamp: new Date() };
      const savedOrder = await order.save();
      const updatedOrder = await savedOrder.populate(['paymentId', 'userId']).execPopulate();
      
      return res.status(200).json({
        message: messages["PAYMENT_VERIFY_FAIL"],
        code: "PAYMENT_VERIFY_FAIL",
        result: updatedOrder
      });
    }

  } catch (error) {
    logger.error(error, "[Payment 002] Error when verify payment");
    errorResponse(error);
  }

}

const list = async (req: any, res: any) => {
  logger.info(`[Payment 003] Payment list api call`);
  try {
      const dataPerPage = Number(req.query?.dataPerPage) || 25;
      const page = Number(req.query?.page) || 1;
      if (req.user?.role === "admin") {
          const query: any = {}

          if (req.query.string) {
              query["$or"] = [
            { 'customerId.first_name': { $regex: req.query.string, $options: "i" } },
            { 'customerId.last_name': { $regex: req.query.string, $options: "i" } },
            { 'customerId.email': { $regex: req.query.string, $options: "i" } },
              ];
          }

          const payments = await PaymentModel.find(query).populate([
              {
                  path: 'customerId', select: "first_name last_name email role phoneNo"
              },
          ]).select(["-__v",]).sort({ createdAt: -1 }).skip(dataPerPage * (page - 1)).limit(dataPerPage);
          const paymentsCount = await PaymentModel.countDocuments(query);

          if (payments?.length > 0) {
              return res.status(200).json({
                  message: messages["PAYMENTS_FOUND"],
                  error: false,
                  code: "PAYMENTS_FOUND",
                  result: payments,
                  dataCount: paymentsCount
              });
          } else {
              return res.status(404).json({
                  message: messages["PAYMENTS_NOT_FOUND"],
                  error: false,
                  code: "PAYMENTS_NOT_FOUND",
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
      logger.error(error, "[Payment 003] Error when get payment list");
      return res.status(500).json(errorResponse(error));
  }
}

export default {
  paymentVerify,
  list
}