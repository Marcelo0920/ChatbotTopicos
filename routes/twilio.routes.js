import express from "express";
import { newMessage } from "../controllers/twilio.controller.js";

const router = express.Router();

router.post("/", newMessage);

export default router;
