import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
// import Admin from "../models/Admin.js";

/*Register User*/
export const register = async(req,res)=>{
    try {
        const {
            usn,
            firstName,
            lastName,
            branch,
            sem,
            email,
            password,
            phoneNumber,
            gender,
            picturePath
        } = req.body;

        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password, salt);

        const newUser = new User({
            usn,
            firstName,
            lastName,
            branch,
            sem,
            email,
            password : passwordHash,
            phoneNumber,
            gender,
            picturePath
        });

        const savedUser = await newUser.save();
        res.status(201).json(savedUser);

    }catch(err){
        res.status(500).json({error:err.message});
    }
};


// Log-in
export const login = async(req, res) =>{
    try{
        const {usn, password} = req.body;
        const user = await User.findOne({usn : usn});
        if(!user) return res.status(400).json({msg:"User does not exist."});

        const isMatch = await bcrypt.compare(password , user.password);
        if(!isMatch) return res.status(400).json({msg:"Invalid credentials."});

        const token = jwt.sign({id:user._id}, process.env.JWT_SECRET);
        delete user.password;//This is to make sure that the password is not sent to front-end by any chance.
        res.status(200).json({token, user});
        
    } catch(err){
        res.status(500).json({error : err.message});
    }
}