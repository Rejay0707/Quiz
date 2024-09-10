import category from "../model/categoryModel.js";

console.log('hi')

const createCategory=async(name,image)=>{
    console.log('hi')
    const existingCategory = await category.findOne({name})
    
    if(existingCategory){
        throw new Error ('Category already exists')
    } 

    return await category.create({
        name,
        image,
    })
}

const getAllCategory= async()=>{
    return await category.find()
}


export  {createCategory,getAllCategory}
