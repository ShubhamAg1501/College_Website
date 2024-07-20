import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv'; // installed it using npm i dotenv to securely store the password of the DB
import userRoutes from './routes/user.route.js';

dotenv.config();  // initialize dotenv


mongoose.connect(process.env.MONGO).then(()=>{
    console.log('Connected to MongoDB');
}).catch((err)=>{
    console.log('err');
});

const app=express();

app.listen(3000,()=>{
    console.log('Server listening on port 3000');
});

app.use("/api/user", userRoutes);

