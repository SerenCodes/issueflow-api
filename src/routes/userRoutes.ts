import express from "express";
import { getUsers } from "../controllers/userController";
import { getUsers, getMe } from "../controllers/userController";
import { protect } from "../middleware/authMiddleware";

const router = express.Router();

router.get("/", getUsers);
router.get("/me", protect, getMe);

export default router;