import 'dotenv/config'; // Load environment variables

import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";

const connectDB = async () => {
    try {
        console.log('MONGODB_URI from .env:', process.env.MONGODB_URI);
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(`MongoDB connected!! DB HOST: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.error("MONGOOSEDB connection error", error);
        process.exit(1);
    }
}

export default connectDB;
