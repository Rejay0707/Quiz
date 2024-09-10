import express from 'express'
import { createDifficultyController,getAllDifficultyLevelController } from '../controller/difficultyController.js'

const router=express.Router()

router.post('/difficultyLevel',createDifficultyController)
router.get('/getAllDifficultyLevel',getAllDifficultyLevelController)

export default router