import mongoose from "mongoose";

const difficultyLevelSchema = new mongoose.Schema(
  {
    level: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const DifficultyLevel = mongoose.model(
  "DifficultyLevels",
  difficultyLevelSchema
);

export default DifficultyLevel;
