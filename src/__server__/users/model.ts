import mongoose, { model, Schema } from "mongoose";

const userSchema: any = new Schema(
    {
        first_name: {
            trim: true,
            type: String,
        },
        last_name: {
            trim: true,
            type: String,
        },
        email: {
            trim: true,
            type: String,
            unique: true
        },
        password: {
            type: String,
            minlength: 6,
        },
        termsAndCondition: {
            type: Boolean,
            default: false,
        },
        role: {
            type: String,
            enum: ["user", "admin"],
            default: "user",
        },
        // type: {
        //     type: String,
        //     enum: ["doctor", "patient", "admin", "universal", "subAdmin"],
        //     default: "doctor",
        // },
        phoneNo: {
            type: String,
            unique: true
        },
        phone: {
            code: String,
            number: {
                type: String,
                unique: true
            },
        },
        isVerified: {
            type: Boolean,
            default: false, //true:verified  false:not verified
        },
        // approveStatus: {
        //     type: String,
        //     default: "pending",
        //     enum: ["approved", "rejected", "pending"],
        // },
        // rejectionReason: {
        //     type: String,
        //     default: "",

        // },
        emailOtp: {
            code: {
                type: String,
            },
            action: {
                type: String,
                enum: ["login", "signup", "forgot", "NA"]
            },
            expiryIn: {
                type: Number,
            },
            expired: {
                type: Boolean,
                default: false,
            },
            otpVerified: {
                type: Boolean,
                default: false,
            },
            type: {
                type: String,
                enum: ["phone", "email", "NA"]
            }
        },
        phoneOtp: {
            code: {
                type: String,
            },
            action: {
                type: String,
                enum: ["login", "signup", "forgot", "NA"]
            },
            expiryIn: {
                type: Number,
            },
            expired: {
                type: Boolean,
                default: false,
            },
            otpVerified: {
                type: Boolean,
                default: false,
            },
            type: {
                type: String,
                enum: ["phone", "email", "NA"]
            }
        },
        // degree: [{ type: Schema.Types.ObjectId, ref: MasterData, required: true, }],
        // areaOfInterest: [{ type: Schema.Types.ObjectId, ref: MasterData, required: true, }],
        // fellowship: [{ type: Schema.Types.ObjectId, ref: MasterData, required: true, }],
        degreeCreds: [{
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
        }],
        degreeDocument: [{
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
        }],
        picture: {
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
        address: {
            city: String,
            state: String,
            country: String,
            pinCode: String,
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
            default: new Date(),
        },
        updateAt: {
            type: Date,
            default: new Date(),
        },
        consent: {
            type: Boolean,
            default: false
        },
        phoneVerified: {
            type: Boolean,
            default: false
        },
        emailVerified: {
            type: Boolean,
            default: false
        },
        firstTimeLogin: {
            type: Boolean,
            default: false
        },
        loggedInDetails: {
            ip: {
                type: String
            },
            appName: String,
            appVersion: String,
            userAgent: String,
            platform: String,
        },
        whatsApp: {
            type: Boolean,
            default: true
        },
        emailSend: {
            type: Boolean,
            default: false
        },
        loginCount: {
            type: Number,
            default: 0
        },
        otpVerifyDate: {
            type: Date
        },
        excelDownload: {
            type: Boolean,
            default: true
        }
    },
    {
        timestamps: true,
    }
);

const Users = mongoose.models.Users || model("Users", userSchema);
export default Users;

