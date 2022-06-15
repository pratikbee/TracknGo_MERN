import mongoose from 'mongoose';

const user=mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        minlength:3,
        trim:true
    }},{
    
    timestamps:true}
)

const User=mongoose.model('User',user)
export default User;
