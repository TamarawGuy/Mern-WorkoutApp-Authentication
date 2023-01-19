import { UserModel } from "../models/userModel.js";

//login user
const loginUser = async (req, res) => {
  res.json({ msg: "Login user" });
};

// sign up user
const signUpUser = async (req, res) => {
  res.json({ msg: "Sign Up User" });
};

export { loginUser, signUpUser };
