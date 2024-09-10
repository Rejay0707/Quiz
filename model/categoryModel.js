import mongoose from "mongoose";

const categorySchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:true,
    }
},{
    timestamps:true,
})

const category=mongoose.model('Categories',categorySchema); 

export default category