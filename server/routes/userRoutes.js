import express from "express";
import { registerUser, loginUser, userCredits, paymentRazorpay, verifyRazorPay } from "../controllers/userController.js";
import userAuth from "../middlewares/auth.js";

const userRouter = express.Router();

// Register route
//http://localhost://4000/api/user/register
userRouter.post("/register", registerUser); 

// Login route
//http://localhost://4000/api/user/login
userRouter.post("/login", loginUser);

//Credits route
//http://localhost://4000/api/user/credits
userRouter.get("/credits", userAuth , userCredits); 

userRouter.post("/pay-razor",userAuth, paymentRazorpay)

userRouter.post("/verify-razor", verifyRazorPay)

// Export the router
export default userRouter;
