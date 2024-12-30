import mongoose, { model, Schema } from "mongoose";
import User from "@/__server__/users/model";

const paymentSchema = new Schema({
  customerId: {
    type: Schema.Types.ObjectId,
    ref: User,
    required: true
  },
  status: {
    type: String,
    default: "pending",
    enum: ["success", "failed", "cancelled", "pending"],
    required: true
  },
  gateway: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  signature: {
    type: String
  },
  paymentId: {
    type: String,
    required: true
  },
  paidAt: {
    type: Date,
    // default: Date.now()
  },
  card: {
    brand: { type: String },
    panLastFour: { type: String },
    expirationMonth: { type: String },
    expirationYear: { type: String },
    cvvVerified: { type: Boolean },
  },
},
  { timestamps: true }
);

const Payments = mongoose.models.Payments || model("Payments", paymentSchema);
export default Payments;
