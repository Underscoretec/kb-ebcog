import mongoose, { Schema, model } from 'mongoose';

const campaignSchema = new Schema({

    firstName: {
        trim: true,
        type: String,
    },
    lastName: {
        trim: true,
        type: String,
    },
    fullName: {
        trim: true,
        type: String,
    },
    email: {
        trim: true,
        type: String,
    },
    phoneNo: {
        phone:{
            type: String,
        },
        timeStamp: {
            type: Date,
        }
    },
    batchNo: {
        type: String,
    },
    societyName: {
        type: String,
    },
    addressLine1: {
        type: String,
    },
    addressLine2: {
        type: String,
    },
    addressLine3: {
        type: String,
    },
    town: {
        type: String,
    },
    city: {
        type: String,
    },
    state: {
        type: String
    },
    pinCode: {
        type: String
    },
    zoneName: {
        type: String,
    },
    mailSent: {
        status: {
            type: Boolean,
            default: false,
        },
        timeStamp: {
            type: Date,
        }
    },
    unsubscribe: {
        status: {
            type: Boolean,
            default: false,
        },
        timeStamp: {
            type: Date
        }
    },
},
    {
        timestamps: true,
    }
);

const Campaigns = mongoose.models.Campaigns || model('Campaigns', campaignSchema);
export default Campaigns;