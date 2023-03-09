import Event from "../models/Event.js";
import Admin from "../models/Admin.js";

// create event
export const createEvent = async ( req, res) =>{
    try {
        const {adminId, picturePath} = req.body;

    } catch ( err ) {
        res.status(409).json({message: err.message})
    }
}