import User from "../models/user_model.js";
import mongoose from "mongoose";

export const findUsers=async(req,res)=>{
    User.find().then((data)=>{res.json(data)}).catch(err=>{res.json("error")})
    
    
}
   


export const addUser=async(req,res)=>{
    const username=req.body.username;
    console.log(username)
   
    
    
    
    const newUser=User({"username":username})
    try{
       newUser.save().then(()=>{res.json("user Added")});
             
    }
    catch(err)
    {
        res.send("lol error"+err)
    }
    
    
    
    

}


