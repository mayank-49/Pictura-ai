import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    creditBalance: {
        type: Number,
        default: 5,
    }
})

{/*This will check if the user model is present if not then it will create a new model with name user */}
const userModel = mongoose.models.user || mongoose.model("user", userSchema); 

export default userModel;