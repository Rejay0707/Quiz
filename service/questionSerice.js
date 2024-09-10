import QuizQuestion from "../model/questionsModel.js";

const createQuizQuestion = async (categoryId, difficultyLevelId, question, options, correctAnswer) => {
  const existingQuizQuestion = await QuizQuestion.findOne({  question });
  
  if (existingQuizQuestion) {
    throw new Error('Quiz question already exists');
  }

  return await QuizQuestion.create({
    categoryId,
    difficultyLevelId,
    question,
    options,
    correctAnswer,
  });
};

const getAllQuizQuestions = async () => {
  return await QuizQuestion.find().populate('categoryId difficultyLevelId');
};

export { createQuizQuestion, getAllQuizQuestions };