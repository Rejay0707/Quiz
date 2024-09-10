import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import categoryRoutes from "./routes/categoryRoutes.js";
import difficultyLevelRoutes from "./routes/difficultLevelRoutes.js";
import questionRoutes from "./routes/questionRoutes.js";

dotenv.config();

connectDB();

const port = process.env.PORT || 8000;

const app = express();
app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/category", categoryRoutes);
app.use("/api", difficultyLevelRoutes);
app.use("/api/quizQuestion", questionRoutes);

app.listen(port, () => {
  console.log("Server running on " + port);
});
