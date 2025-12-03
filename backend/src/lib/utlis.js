import jwt from "jsonwebtoken";

export const generateToken = (userId, req) => {

  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "7d"
  })

  req.cookie("jwt", token, {
    maxAge: 7 * 24 * 60 * 60 * 1000, // MS
    httpOnly: true, // prevent XSS attacks cross site scripting attacks
    sameSite: "strict", // prevent CSRF attacks cross site request forgery attacks
    secure: process.env.NODE_ENV !== "development"
  })
  return token;
};