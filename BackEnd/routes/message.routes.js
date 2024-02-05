import express from "express";
import protectRoute from "../Middleware/protectRoute.middleware.js";
import { sendMessage,getMessages } from "../controllers/message.controller.js";

const router = express.Router();

router.post("/send/:id", protectRoute, sendMessage);
router.get("/:id", protectRoute, getMessages);

export default router;
