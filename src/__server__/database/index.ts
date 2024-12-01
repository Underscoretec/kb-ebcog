/* eslint-disable @typescript-eslint/ban-ts-comment */
import mongoose from "mongoose";

async function connectDB() {
    try {
        const MONGODB_URI = process.env.MONGO_URI;

        if (!MONGODB_URI) {
            throw new Error("Please define the MONGODB_URI environment variable inside .env.local");
        }

        // @ts-expect-error
        let cached = global["mongoose"];

        if (!cached) {
            // @ts-ignore
            cached = global["mongoose"] = { conn: null, promise: null };
        }

        if (cached.conn) return cached.conn;

        if (!cached.promise) {
            cached.promise = mongoose.connect(MONGODB_URI).then((mongoose: any) => mongoose);
        }

        cached.conn = await cached.promise;
        console.log("Database connected successfully");
        return cached.conn;
    } catch (error) {
        console.log(error, "error in database conection.")
    }
}

export default connectDB;
