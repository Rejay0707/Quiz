import express from 'express'
import { createCategoryController,getAllCategoryController } from '../controller/categoryController.js'

const router=express.Router()

router.post('/category',createCategoryController)
router.get('',getAllCategoryController)

export default router