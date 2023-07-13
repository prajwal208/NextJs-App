import mongoose from 'mongoose'

delete mongoose.connection.models['User'];


const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        min:3,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        min:6
    }


},{timestamps:true})

export default mongoose.model('User', userSchema)