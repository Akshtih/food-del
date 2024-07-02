import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://admin:1234@cluster0.qiwzhhc.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}