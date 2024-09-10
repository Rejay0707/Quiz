import express from 'express';
import { createQuizQuestionController,getAllQuizQuestionsController } from '../controller/questionController.js';

const router = express.Router();

router.post('/:categoryId/:difficultyLevelId', createQuizQuestionController);
router.get('', getAllQuizQuestionsController);

export default router;