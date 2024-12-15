import mongoose, { model, Schema } from "mongoose";
// import Users from "../users/model";

// Define the Course schema
const sessionSchema: any = new Schema(
    {
        sessionId: {
            type: String,
            unique: true,
        },
        timeStamp: {
            type: Date
        },
        fullName: {
            trim: true,
            type: String,
        },
        email: {
            trim: true,
            type: String,
        },
        whatsAppNumber: {
            type: String,
        },
        address: {
            city: String,
            state: String,
            country: String,
            pinCode: String,
        },
        courseName: {
            type: String,
            enum: ["maternalMedicine", "reproductiveEndocrinology_Infertility", "gynaecologyEndoscopy", "fetalMedicine_Ultrasound"],
        },
        createdAt: {
            type: Date,
        },
        updatedAt: {
            type: Date,
            // default: new Date(),
        },
    },
    {
        timestamps: true,
    }
);

const Sessions = mongoose.models.Sessions || model('Sessions', sessionSchema);
export default Sessions;
