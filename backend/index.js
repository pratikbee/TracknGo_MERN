import express from "express";
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import UserRoutes from './routes/user.js'
import ExerciseRoutes from './routes/exercise.js'
import bodyParser from 'body-parser';


dotenv.config()

const port= 5000
const app=express();

// app.use(express.json())
app.use(bodyParser.json({limit:"30mb",extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}));
app.use(cors())
app.use("/users",UserRoutes)
app.use("/exercise",ExerciseRoutes)

mongoose.connect(process.env.ATLAS_URI,{useNewUrlParser:true , useUnifiedTopology:true})
.then(()=>app.listen(port,()=>{console.log(`server running on ${port}`)}))
.catch((err)=>{console.log(err)});




