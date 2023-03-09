import mongoose from "mongoose";

const adminSchema = mongoose.Schema(
    {
        adminName : {
            type : String,
            required : true,
            min : 2,
            max : 50,
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
        branch : {
            type : String,
            required : true,
            max : 20
        },
    },
    {timestamps : true}
);

const Admin = mongoose.model("Admin", adminSchema);


export default Admin;