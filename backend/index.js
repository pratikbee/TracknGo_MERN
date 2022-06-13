import express from "express";
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';


dotenv.config()

const port= 5000
const app=express();
app.use(cors())
app.use(express.json())

mongoose.connect(process.env.ATLAS_URI,{useNewUrlParser:true , useUnifiedTopology:true})
.then(()=>app.listen(port,()=>{console.log(`server running on ${port}`)}))
.catch((err)=>{console.log(err)});




