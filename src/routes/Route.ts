import { Router } from "express";
import {} from "../controllers/Controller";
import { protect, protectAdmin } from "../middlewares/authMiddleware";

const router = Router();

export default router;
