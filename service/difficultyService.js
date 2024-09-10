import DifficultyLevel from "../model/difficultyLevelModel.js";

const createDifficulty=async(level)=>{
    const existingDifficultyLevel=await DifficultyLevel.findOne({level})
    if(existingDifficultyLevel){
        throw new Error('Difficulty level already exist')
    }

    return await DifficultyLevel.create({level})
}

const getAllDifficultyLevel=async()=>{
    return await DifficultyLevel.find()
}

export {createDifficulty,getAllDifficultyLevel}