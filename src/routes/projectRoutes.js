import express from "express";
import { suggestProjects } from "../controllers/projectController.js";

const router = express.Router();

router.post("/suggest-projects", suggestProjects);

export default router;
