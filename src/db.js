import mongoose from "mongoose";

const mongoURI = process.env.MONGO_URI || "mongodb://admin:password123@mongo:27017/appdb?authSource=admin";

export const connectDB = async () => {
    try {
        await mongoose.connect(mongoURI);
        console.log("DB is connected");
    } catch (error) {
        console.error("DB connection error:", error);
    }
};
