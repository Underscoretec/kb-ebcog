import mongoose, { model, Schema } from "mongoose";
import UserModel from "@/__server__/users/model";
import CourseModel from "@/__server__/courses/model";

const cartSchema = new Schema(
    {
        items: [
            {
                course: {
                    type: Schema.Types.ObjectId,
                    ref: CourseModel,
                },
                quantity: { type: Number, },
            }
        ],

        createdBy: {
            type: Schema.Types.ObjectId,
            ref: UserModel,
        },
        createdDate: {
            type: Date,
        },
        updatedDate: {
            type: Date,
        },
        enable: {
            type: Number,
            default: 1    //0:delete, 1:active, 2:disable
        },

    },
    { timestamps: true }

);

const Carts = mongoose.models.Carts || model("Carts", cartSchema);
export default Carts;