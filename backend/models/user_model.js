import mongoose from 'mongoose';

const user=mongoose.Schema({
    userName:{
        type:String,
        required:true,
        unique:true,
        minlength:3,
        trim:true
    }},{
    
    timestamp:true}
)

const User=mongoose.model('User',user)
export default User;
