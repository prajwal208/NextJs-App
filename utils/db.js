import mongoose from 'mongoose'

const connectdb = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("connected to database...");
    } catch (error) {
        console.log("failed to connect", error);
    }
    
}

export default connectdb