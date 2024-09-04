import { Router } from "express";
import clima from "../../Controllers/Clima/Clima.controller.js";

const router = Router();

router.get("today", clima.getTodayWeather);
router.get("fivedays", clima.getFiveDaysWeather);

export default router;
