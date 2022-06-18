import mongoose from 'mongoose';

const userSchema =  mongoose.Schema(
    {
    username:{type:String,required: true,unique: true,trim: true,minlength: 3}
    },
    
   { timestamps: true}
  

    );

const User=mongoose.model('User',userSchema)
export default User;
