import express from "express";
// import cors from "cors";
import "express-async-errors";
import dotenv from "dotenv";
import morgan from "morgan";

import { dirname } from "path";
import { fileURLToPath } from "url";
import path from "path";

import helmet from "helmet";
import xss from "xss-clean";
import mongoSanitize from "express-mongo-sanitize";
import cookieParser from "cookie-parser";

import connectDB from "./db/connect.js";

import authRouter from "./routes/authRoutes.js";
import jobsRouter from "./routes/jobsRoutes.js";

import authenticateUser from "./middleware/auth.js";
import notFoundMiddleware from "./middleware/not-found.js";
import errorMiddleware from "./middleware/error-handler.js";

const app = express();
dotenv.config();

const port = process.env.PORT || 5000;

if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}

// app.use(cors());

const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(express.static(path.resolve(__dirname, "./client/build")));

app.use(express.json());
app.use(cookieParser());
app.use(helmet());
app.use(xss());
app.use(mongoSanitize());

app.get("/api/v1", (req, res) => {
  res.json({
    msg: "Job Portal API",
  });
});

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/jobs", authenticateUser, jobsRouter);

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
});

app.use(notFoundMiddleware);
app.use(errorMiddleware);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () => console.log(`Server running on port ${port}`));
  } catch (err) {
    console.log(err);
  }
};

start();
