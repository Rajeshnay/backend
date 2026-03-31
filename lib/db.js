import mongoose from "mongoose";

export const connectDB = async () => {
  if (mongoose.connections[0].readyState) return;

  await mongoose.connect("mongodb+srv://admin:admin123@cluster0.7vf18fm.mongodb.net/?appName=Cluster0/mydb");
  console.log("DB Connected");
};