import { getAICropRecomendation } from "../../Controllers/GeminiAI/GeminiAI.controller.js";
import express from "express";
const router = express.Router();

router.route("/").get(getAICropRecomendation);

export default router;