import mongoose from "mongoose";

const quizQuestionSchema = new mongoose.Schema(
  {
    categoryId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Categories",
      required: true,
    },
    difficultyLevelId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "DifficultyLevels",
      required: true,
    },
    question: {
      type: String,
      required: true,
    },
    options: {
      type: [String],
      required: true,
    },
    correctAnswer: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const QuizQuestion = mongoose.model("QuizQuestions", quizQuestionSchema);

export default QuizQuestion;
