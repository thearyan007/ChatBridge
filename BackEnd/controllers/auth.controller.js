import bcrypt from "bcryptjs";
import User from "../models/user.model.js";
import generateWebToken from "../utils/genrateToken.js";

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

    if (newUser) {
      generateWebToken(newUser._id, res);

      await newUser.save();

      res.status(201).json({
        _id: newUser._id,
        fullName: newUser.fullName,
        userName: newUser.userName,
        profilePic: newUser.profilePic,
      });
    } else {
      res.send(400).json({ error: "Invalid User Data" });
    }
  } catch (error) {
    console.log("Error in the sigup Controller" + error.message);
    res.status(500).json({ error: "Internal Server Error!!" });
  }
};

export const login = async (req, res) => {
  try {
    const { userName, password } = req.body;
    const currentUser = await User.findOne({ userName });
    const isPassCorrect = await bcrypt.compare(
      password,
      currentUser?.password || ""
    );
    if (!currentUser || !isPassCorrect) {
      return res.status(400).json({ error: "invalid Credential" });
    }
    generateWebToken(currentUser._id, res);
    res.status(200).json({
      _id: currentUser._id,
      fullName: currentUser.fullName,
      userName: currentUser.userName,
      profilePic: currentUser.profilePic,
    });
  } catch (error) {
    console.log("Error in the signin Controller" + error.message);
    res.status(500).json({ error: "Internal Server Error!!" });
  }
};

export const logout = (req, res) => {
  res.send("LogOut user");
  console.log("Log Out User");
};
