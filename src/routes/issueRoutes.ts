import express from "express";
import {
  createIssue,
  getIssues,
  updateIssueStatus,
} from "../controllers/issueController";
import { protect } from "../middleware/authMiddleware";

const router = express.Router();

router.post("/", protect, createIssue);
router.get("/:projectId", protect, getIssues);
router.patch("/:issueId", protect, updateIssueStatus);

export default router;