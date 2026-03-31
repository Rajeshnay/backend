import { connectDB } from "../../lib/db";
import User from "../../models/users";
import bcrypt from "bcryptjs";

export default async function handler(req, res) {
  await connectDB();

  const { email, password } = req.body;

  // hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  const user = new User({
    email,
    password: hashedPassword,
  });

  await user.save();

  res.status(200).json({ message: "User registered" });
}