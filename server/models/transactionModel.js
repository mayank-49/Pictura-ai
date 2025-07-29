import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema({
    userId:{
        type: String,
        required: true,
    },
    plan:{
        type: String,
        required: true,
    },
    amount:{
        type: Number,
        required: true,
    },
    credits:{
        type: Number,
        required: true,
    },
    payment:{
        type: Boolean,
        default: false,
    },
    date:{
        type: Date,
    }
})

{/*This will check if the transaction model is present if not then it will create a new model with name transaction */}
const transactionModel = mongoose.models.transaction || mongoose.model("transaction", transactionSchema); 

export default transactionModel;