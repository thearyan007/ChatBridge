import jwt from "jsonwebtoken";

const generateWebToken = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "15d",
  });
  res.cookie("jwt", token, {
    maxAge: 15 * 24 * 60 * 60 * 1000, // in miliSeconds
    httpOnly: true, //prevent XSS attacks
    sameSite: "strict",
    secure: process.env.DEV_MODE !== "development",
  });
};

export default generateWebToken;
