import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    tc :{type:Boolean,default:true}
})


const UserModel = mongoose.model("User",UserSchema)

export default UserModel