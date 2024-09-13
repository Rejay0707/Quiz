import QuizQuestion from "../model/questionsModel.js";

const createQuizQuestion = async (categoryId, difficultyLevelId, question, options, correctAnswer) => {
  const existingQuizQuestion = await QuizQuestion.findOne({  question });

  if(existingQuizQuestion){
    throw new Error('Question already exist')
}

  let formattedOptions = options;

  
  if (typeof options === 'string') {
    formattedOptions = options.split(',').map(option => option.trim());
  }

  

  return await QuizQuestion.create({
    categoryId,
    difficultyLevelId,
    question,
    options: formattedOptions,
    correctAnswer,
  });
};

const getAllQuizQuestions = async () => {
  return await QuizQuestion.find().populate('categoryId difficultyLevelId');
};

export { createQuizQuestion, getAllQuizQuestions };