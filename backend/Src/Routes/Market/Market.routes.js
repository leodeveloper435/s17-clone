import express from "express";
import { getMarketGrainPrices } from "../../Controllers/Market/Market.controller.js"
const router = express.Router();

router.route("/").get(getMarketGrainPrices);

export default router;
