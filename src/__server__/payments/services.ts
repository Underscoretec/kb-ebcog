import Razorpay from 'razorpay';
import OrderModel from "@/__server__/orders/model"
import errorResponse from "@/__server__/utils/errorResponse";

const instance = new Razorpay({
    key_id:process.env.RZP_PAYMENT_KEY!, key_secret: process.env.RZP_PAYMENT_SECRET!
})
export async function razPaymentOrderCreate(data: any) {
    try {
      console.log(data, ">>>> data from order create api")
      const options = {
        amount: (data?.amount * 100),  // amount in the smallest currency unit
        currency: data?.currency,
        receipt: data?.orderId  // Order id save in payment records
      };
      const rzpOrder = await instance.orders.create(options)
      if (rzpOrder) {
        const orderupdate = await OrderModel.findOneAndUpdate(
          { _id: data?.orderId.toString() },
          { $set: { razOrderId: rzpOrder.id } },
          { new: true },
        )
          console.log(orderupdate,'>>>>>   orderupdate');
        return rzpOrder;
      }
      else {
        throw new Error("RAZORPAY_ORDER_NOT_CREATED")
      }
  
    } catch (error) {
      errorResponse(error);
    }
  
  }