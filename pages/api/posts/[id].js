import Post from "../../../models/Post";
import dbConnect from "../../../util/dbConnnect";

export default async function handler(req, res){
    const {method, query:{id}} = req;

    await dbConnect();
    
    //find a single post
    if(method === "GET"){
        try{
            const post = await Post.findById(id);
            res.status(200).json(post)

        }catch(err){
            res.status(500).json(err)
        }
    }

    //delete a single post
    if(method === "DELETE"){
        try{
            const post = await Post.findByIdAndDelete(id);
            res.status(200).json(post)

        }catch(err){
            res.status(500).json(err)
        }
    } 

    //update a single post ?? 
}