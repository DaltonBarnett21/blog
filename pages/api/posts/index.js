import dbConnect from "../../../util/dbConnnect";
import Post from "../../../models/Post";

export default async function handler(req, res){
    const {method} = req;

    await dbConnect();

    //get all posts
    if(method === "GET"){
        try{
            const posts = await Post.find();
            res.status(200).json(posts);

        }catch(err){
            res.status(500).json(err);
        }
    }

    //create a post
    if(method === "POST"){
        try{
            const post = await Post.create(req.body)
            res.status(200).json(post)

        }catch(err){
            res.status(500).json(err)
        }
    }
}
