import express from "express";
import {
    getLatestEvents,
    getAllEvents,
    // createBranch,
    // removeBranch,
    // getAllBranches,
    // createEvent,
    removeEvent,
} from "../controllers/events.js"
import {verifyToken} from "../middleware/auth.js";

const router = express.Router();

// read
router.get("/", verifyToken, getAllEvents);

// delete
router.delete("/eventId")


export default router;
