import mongoose from "mongoose";


const exercise=mongoose.Schema({
    username:{type:String,required:true},
    desription:{type:String,required:true},
    duration:{type:Number,required:true},
    date:{type:Date,required:true}
},

    {
        timestamp:{}
    }
)

const Exercise=mongoose.model("Exercise",exercise)

module.exports=Exercise


