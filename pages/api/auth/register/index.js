import User from "../../../../models/User";
import dbConnect from "../../../../util/dbConnnect";
import bcrypt from "bcrypt"

export default async function handler(req, res){
     const {method} = req;
     const saltRounds = 10;

     await dbConnect();

     if(method === "POST"){
         try{

             const email = await User.findOne({email:req.body.email})
                if(email){
                    res.status(500).json("Email already exists!")
                }else{
                    const salt = await bcrypt.genSalt(saltRounds);
                    req.body.password = await bcrypt.hash(req.body.password, salt);
                    const newUser = new User(req.body);
                    const savedUser = newUser.save();
                    res.status(200).json(newUser);
                }
            }catch(err){
             res.status(500).json(err)
         }
     }
}