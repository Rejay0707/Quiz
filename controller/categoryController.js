import { createCategory,getAllCategory } from "../service/categoryService.js";

//to create cayegory
const createCategoryController = async (req,res)=>{
    const {name,image}=req.body;
    console.log(req.body)
    try {
        const category=await createCategory(name,image)
        res.status(201).json(category)
    } catch (error) {
        if(error.message==='Category already exists'){
            return res.status(400).json({message:"Category already exists"})
        }else{
            return res.status(400).json({message:"Failed to create the category",error:error.message})
        }
    }
}

const getAllCategoryController=async(req,res)=>{
    
    try {
        const categories=await getAllCategory()
        res.status(200).json(categories)
    } catch (error) {
        res.status(500).json({message:"Internal Server Error"})
    }
}

export {createCategoryController,getAllCategoryController}