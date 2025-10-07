// require('dotenv').config({path: './env'}) --> works but doesn't looks good as it is not consistent
import dotenv from "dotenv"

import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import connectDB from "./db/index.js";

dotenv.config({
    path: "../.env"
})


// connectDB() returns a promise and that's why we are using then catch
connectDB()
.then(()=>{
    // If MongoDB connects successfully
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`app is listening on port ${process.env.PORT}`);
    })
})
.catch((err)=>{
    // If MongoDB connection fails
    console.log("Mongodb connection failed",err);
})
























//--------------------------------------------------HOW TO CONNECT THE DATABASE IN INDEX.JS FILE--------------------------------------------------


// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";

// import express from "express";
// const app=express();

// (async () => {
//     try{
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         app.on("error",(error)=>{
//             console.log("Error:",error);
//             throw error
//         })

//         app.listen(process.env.PORT,()=>{
//             console.log(`app is listening on ${process.env.PORT}`);
//         })
//     } catch(error){
//         console.error("ERROR:",error);
//         throw error;
//     }
// })()

//------------------------------------------------------------------------------------------------------------------------------------------------




