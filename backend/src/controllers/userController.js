import { UserModel } from "../models/userModel.js";

//login user
const loginUser = async (req, res) => {
  res.json({ msg: "Login user" });
};

// sign up user
const signUpUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await UserModel.signup(email, password);
    res.status(200).json({ email, user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export { loginUser, signUpUser };
