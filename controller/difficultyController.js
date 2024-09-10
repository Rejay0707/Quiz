import { createDifficulty,getAllDifficultyLevel } from "../service/difficultyService.js";

const createDifficultyController = async (req, res) => {
  const { level } = req.body;
  try {
    const difficulty = await createDifficulty(level);
    res.status(200).json(difficulty);
  } catch (error) {
    if (error.message === "Difficulty level already exist") {
      return res
        .status(400)
        .json({ message: "Difficulty level already exist" });
    } else {
      return res
        .status(400)
        .json({
          message: "Failed to create Difficulty level",
          error: error.message,
        });
    }
  }
};

const getAllDifficultyLevelController=async(req,res)=>{
    try {
        const difficulty=await getAllDifficultyLevel();
    res.status(200).json(difficulty)
    } catch (error) {
        res.status(500).json({message:'Internal Server Error'})
    }
}

export {createDifficultyController,getAllDifficultyLevelController}
