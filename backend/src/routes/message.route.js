import express from "express";
import { protectedRoute } from "../middleware/auth.middleware.js";
import { getUsresForSidebar, getMessages } from "../controllers/message.controller.js";

const router = express.Router();

router.get("/users", protectedRoute, getUsresForSidebar)
router.get("/:id", protectedRoute, getMessages)

router.post("/", (req, res) => {
    res.json({ message: "Message sent successfully" });
});

export default router;
