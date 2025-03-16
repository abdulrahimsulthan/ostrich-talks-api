import mongoose from "mongoose";

const configureDB = async () => {
    const mongoURI = process.env.MONGO_URI
    if (!mongoURI) {
        throw new Error("MONGO_URI is not defined in environment variables.");
    }
    mongoose.connect(mongoURI)
        .then(() => console.log('MongoDB connected successfully'))
        .catch(err => console.error('MongoDB connection error:', err));
}

export default configureDB;
