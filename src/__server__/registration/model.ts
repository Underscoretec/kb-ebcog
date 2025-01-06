import mongoose, { model, Schema } from "mongoose";

const registrationSchema: any = new Schema(
    {
        fullName: {
            trim: true,
            type: String,
            required: true,
        },
        email: {
            trim: true,
            type: String,
            unique: true,
            required: true,
        },
        whatsAppNumber: {
            type: String,
            // unique: true
        },
        // phoneNo: {
        //     type: String,
        //     unique: true
        // },
        address: {
            city: String,
            state: String,
            country: String,
            pinCode: String,
            // required: true,
        },
        courseName: {
            type: String,
            enum: ["maternalMedicine", "reproductiveEndocrinology_Infertility", "gynaecologyEndoscopy", "fetalMedicine_Ultrasound"],
            required: true,
        },
        latestDegreeCertificate: {
            key: {
                type: String,
            },
            name: {
                type: String,
            },
            mimetype: {
                type: String,
            },
            location: {
                type: String,
            },
            size: {
                type: Number,
            }
        },
        basicDegreeDocument: {
            key: {
                type: String,
            },
            name: {
                type: String,
            },
            mimetype: {
                type: String,
            },
            location: {
                type: String,
            },
            size: {
                type: Number,
            }
        },
        
        gender: {
            type: String
        },
        enabled: {
            type: Number,
            default: 1, //0:delete, 1:user, 2:disable
        },
        createAt: {
            type: Date,
        },
        updateAt: {
            type: Date,
        },
    },
    {
        timestamps: true,
    }
);

const Registrations = mongoose.models.Registrations || model("Registrations", registrationSchema);
export default Registrations;

