import mongoose from "mongoose";

const connectDB = async () => {
  try {
    if (mongoose.connection.readyState) return;

    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected To DB");
  } catch (error) {
    console.log("Can Not Connect To DB \n", error);
    return;
  }
};

export default connectDB;
