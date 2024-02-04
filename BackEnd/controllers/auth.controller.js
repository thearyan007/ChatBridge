import bcrypt from "bcryptjs";
import User from "../models/user.model.js";

export const signup = async (req, res) => {
  try {
    const { fullName, userName, password, confirmPassword, gender } = req.body;

    if (password != confirmPassword) {
      return res.status(400).json({ error: "Passwords did not Match" });
    }
    const user = await User.findOne({ userName });
    if (user) {
      return res.status(400).json({ error: "User Already Exists!!" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(password, salt);

    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${userName}`;
    const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${userName}`;

    const newUser = new User({
      fullName,
      userName,
      password: hashedPass,
      gender,
      profilePic: gender == "male" ? boyProfilePic : girlProfilePic,
    });
    await newUser.save();
    res.status(201).json({
      _id: newUser._id,
      fullName: newUser.fullName,
      userName: newUser.userName,
      profilePic: newUser.profilePic,
    });
  } catch (error) {
    console.log("Error in the sigup Controller" + error.message);
    res.status(500).json({ error: "Internal Server Error!!" });
  }
};

export const login = (req, res) => {
  res.send("Login User");
  console.log("Login User");
};

export const logout = (req, res) => {
  res.send("LogOut user");
  console.log("Log Out User");
};
