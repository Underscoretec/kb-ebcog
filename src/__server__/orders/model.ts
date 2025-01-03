import mongoose, { model, Schema } from "mongoose";
import Payment from "@/__server__/payments/model";
import Course from "@/__server__/courses/model";
import User from "@/__server__/users/model";

const orderSchema = new Schema(
    {
        userId: {
            type: Schema.Types.ObjectId,
            required: true,
            ref: User,
        },
        orderId: {
            type: String,
            required: true,
            unique: true
        },
        paymentId: {
            type: Schema.Types.ObjectId,
            ref: Payment,
        },
        paymentStatus: {
            status: {
                type: String,
                default: "pending",
                enum: ["success", "failed", "cancelled", "pending"],
            },
            timeStamp: {
                type: Date
            }
            
         },
        paymentType: { type: String }, //for COD cod will be passed
        orderStatus: {
            status: {
            type: String,
            default: "pending",
            enum: ["created","failed", "cancelled", "pending"],
            },
            timeStamp: {
                type: Date
            }
            
        },
        currency: {
            type: String,
            // required: true,
            default: "AED",
        },
        items: [
            {
                courseId: {
                    type: Schema.Types.ObjectId,
                    ref: Course,
                    required: true
                },
                quantity: { type: Number, },
                price: { type: Number, },
                img: { type: String },
                name: { type: String },
            },
        ],
        basePrice:{type: Number},
        discountAmount: { type: Number ,default: 0}, // discount amount
        payableAmount: { type: Number, required: true }, //payableAmount 
        razOrderId: { type: String },
        stripeOrderId: { type: String },
        createdBy: {
            type: Schema.Types.ObjectId,
            ref: User
        },
        createdAt: {
            type: Date,
        },
        updatedAt: {
            type: Date,
        },
        updatedBy: {
            type: Schema.Types.ObjectId,
            ref: User
        }
        
    },
    { timestamps: true }
);

const Orders = mongoose.models.Orders || model("Orders", orderSchema);
export default Orders;
