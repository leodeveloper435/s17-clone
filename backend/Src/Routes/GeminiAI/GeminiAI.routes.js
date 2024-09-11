import {
  getAICropRecomendation,
  getAICropResponse,
} from "../../Controllers/GeminiAI/GeminiAI.controller.js";
import express from "express";
const router = express.Router();

router.post("/recommendation", getAICropRecomendation);
router.post("/response", getAICropResponse);

export default router;
