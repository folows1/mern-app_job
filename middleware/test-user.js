import { BadRequestError } from "../errors/index.js";

const testUser = (req, res, next) => {
  if (req.user.testUser) {
    throw new BadRequestError("Not authorized - read only");
  }
  next();
};

export default testUser;
