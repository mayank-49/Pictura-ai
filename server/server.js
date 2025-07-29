import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/mongodb.js';
import userRouter from './routes/userRoutes.js';
import imageRouter from './routes/imageRoutes.js';

const PORT = process.env.PORT || 4000;
const app = express();


app.use(express.json())
app.use(cors())

await connectDB()

app.use('/api/user', userRouter); {/*This will use the user router for all user related routes*/}
app.use('/api/image', imageRouter); {/*This will use the image router for all image related routes*/}

app.get("/",(req, res) => {res.send("API Working")});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});