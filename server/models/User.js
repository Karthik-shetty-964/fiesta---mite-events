import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    usn : {
        type : String,
        required : true,
        min : 10,
        max : 10,
        unique : true
    },
    firstName : {
        type : String,
        required : true,
        min : 2,
        max : 50,
    },
    lastName : {
        type : String ,
        required : true,
        max : 20
    },
    branch : {
        type : String,
        required : true,
        max : 20
    },
    sem : {
        type : Number,
        min: 1,
        max : 8
    },
    email : {
        type : String,
        required : true,
        max : 50,
        unique : true
    },
    password : {
        type : String,
        required : true,
        min : 5,
    },
    phoneNumber:{
        type : String,
        min : 10,
        max : 12
    },
    gender : {
        type : String,
        min : 1,
        max : 10
    },
    picturePath:{
        type:String,
        default : ""
    },
    registeredEvents:{
        type:Array,
        default : []
    }
},{timestamps : true});

const User = mongoose.model("User", UserSchema);

export default User;