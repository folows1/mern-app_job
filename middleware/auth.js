import jwt from "jsonwebtoken";
import { UnauthenticatedError } from "../errors/index.js";

const auth = async (req, res, next) => {
  // const authHeader = req.headers.authorization;

  // if (!authHeader || !authHeader.startsWith("Bearer")) {
  //   throw new UnauthenticatedError("Authentication invalid");
  // }

  // const token = authHeader.split(" ")[1];

  const token = req.cookies.token;

  if (!token) {
    throw new UnauthenticatedError("Authentication invalid");
  }

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    const testUser = payload.userId === "63e0211e23e8746aa08b8721";
    req.user = { userId: payload.userId, testUser };
    next();
  } catch (err) {
    throw new UnauthenticatedError("Authentication invalid");
  }
};

export default auth;
