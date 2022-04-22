import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
    },
    title:{
        type:String,
        required:true,
    },
    body:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true,
    }
},{timestamps:true})

export default mongoose.models.Post || mongoose.model("Post", postSchema)