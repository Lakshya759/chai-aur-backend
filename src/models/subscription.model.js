import mongoose, { Schema } from "mongoose";

const subscriptionSchema=new Schema({
    subscriber:{
        type:Schema.type.objectId,
        ref:"User"
    },
    channel:{
        type:Schema.type.objectId,
        ref:"User"
    }
},{timestamps:true})

export const Subscription = mongoos.model("Subscription",subscriptionSchema)