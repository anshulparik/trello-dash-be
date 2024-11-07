import cors from "cors";
import * as dotenv from "dotenv";
import express from "express";
import { dbConnect } from "./db/db";
import { router as taskRouter } from "./Routes/task";

dotenv.config();

const app = express();
const port = process?.env?.PORT || 4000;

// middlewares
app.use(
  cors({
    origin: process.env.FE_BASE_URL,
  })
);
app.use(express.json());
app.use("/task", taskRouter);

const startServer = async () => {
  try {
    await dbConnect();
    app.listen(port, async () => {
      console.log(`Server is runnning on port ${port}!`);
    });
  } catch (error) {
    console.log(error);
    process?.exit(1);
  }
};

startServer();
