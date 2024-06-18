import express from "express";
import { generateProductEmbedding } from "../controllers/embedding.controller.js";

const router = express.Router();

router.post("/", generateProductEmbedding);

export default router;
