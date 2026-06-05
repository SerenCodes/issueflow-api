import express from "express";
import {
  createProject,
  getProjects,
} from "../controllers/projectController";
import { protect } from "../middleware/authMiddleware";

const router = express.Router();

router.post("/", protect, createProject);
router.get("/:organisationId", protect, getProjects);

export default router;