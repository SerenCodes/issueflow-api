import express from "express";
import {
  createOrganisation,
  getOrganisations,
} from "../controllers/organisationController";
import { protect } from "../middleware/authMiddleware";

const router = express.Router();

router.post("/", protect, createOrganisation);
router.get("/", protect, getOrganisations);

export default router;