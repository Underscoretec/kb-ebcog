import mongoose, { model, Schema } from "mongoose";
import Users from "../users/model";

// Define the Course schema
const courseSchema: any = new Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },
        overView: {
            description: String,
            whyTrainWithUs: {
                expertFaculty: String,
                facilities: String,
                careerAdvancement: String
            },
        },
        category: {
            type: String,
            trim: true
        },
        courseThumbnail: {
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
        duration: {
            type: Number, // Duration in Weeks
            default: 1
        },
        learners: [{
            type: Schema.Types.ObjectId, // enrolled student
            ref: Users
        }],
        price: {
            base: {
                type: Number,
                required: true,

            },
            currency: {
                type: String,
                default: "AED"
            },
        },
        leadInstructor: {
            type: Schema.Types.ObjectId, // Reference to the Faculties model
            ref: 'Faculties',
            // required: true,
        },
        faculties: [{
            type: Schema.Types.ObjectId, // Reference to the Faculties model
            ref: 'Faculties',
        }],
        date: {
            from: {
                type: String
            },
            to: {
                type: String
            }
        },
        enabled: {
            type: Number,
            default: 1, //0:delete, 1:active, 2:disable
        },
        createdBy: {
            type: Schema.Types.ObjectId,
            ref: 'users'
        },
        createdAt: {
            type: Date,
            // default: new Date(),
        },
        updatedAt: {
            type: Date,
            // default: new Date(),
        },
        updatedBy: {
            type: Schema.Types.ObjectId,
            ref: 'users'
        }

    },
    {
        timestamps: true,
    }
);

const Courses = mongoose.models.Courses || model('Courses', courseSchema);
export default Courses;
