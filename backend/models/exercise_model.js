import mongoose from "mongoose";


const exercise=mongoose.Schema({
    username:{type:String,required:true},
    description:{type:String,required:true},
    duration:{type:Number,required:true},
    date:{type:Date,required:true}
},

    {
        timestamps:true
    }
)

const Exercise=mongoose.model("Exercise",exercise)

export default Exercise;


