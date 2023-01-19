import { UserModel } from "../models/userModel.js";
import jwt from "jsonwebtoken";

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "3d" });
};

//login user
const loginUser = async (req, res) => {
  res.json({ msg: "Login user" });
};

// sign up user
const signUpUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    // save user
    const user = await UserModel.signup(email, password);
    // create token
    const token = createToken(user._id);
    res.status(200).json({ email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export { loginUser, signUpUser };
