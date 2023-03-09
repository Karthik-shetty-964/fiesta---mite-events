import express from "express";
import { 
    getUser,
    // getLatestEvents,
    getRegisteredEvents,
    // createBranch,
    // removeBranch,
    // getAllBranches,
    // createEvent,
    // removeEvent,
    registerUnregisterForEvent
} from "../controllers/users.js"
import {verifyToken} from "../middleware/auth.js";


const router = express.Router();

// Read routes
router.get("/:id", verifyToken, getUser);
router.get("/:id/registeredEvents", verifyToken, getRegisteredEvents);

// update
router.patch("/:id/:eventId", verifyToken, registerUnregisterForEvent);

export default router;