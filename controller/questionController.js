import { createQuizQuestion,getAllQuizQuestions } from "../service/questionSerice.js";
const createQuizQuestionController = async (req, res) => {
  const { categoryId, difficultyLevelId } = req.params;
  const { question, options, correctAnswer } = req.body;
  try {
    const quizQuestion = await createQuizQuestion(
      categoryId,
      difficultyLevelId,
      question,
      options,
      correctAnswer
    );
    res.status(201).json(quizQuestion);
  } catch (error) {
    if (error.message === "Quiz question already exists") {
      return res.status(400).json({ message: "Quiz question already exists" });
    } else {
      return res.status(400).json({
        message: "Failed to create the quiz question",
        error: error.message,
      });
    }
  }
};

const getAllQuizQuestionsController = async (req, res) => {
  try {
    const quizQuestions = await getAllQuizQuestions();
    res.status(200).json(quizQuestions);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export { createQuizQuestionController, getAllQuizQuestionsController };
