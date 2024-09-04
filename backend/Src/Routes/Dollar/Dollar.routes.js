import express from "express";
import { getDollarQuotes } from "../../Controllers/Dollar/Dollar.controller.js"
const router = express.Router();

router.route("/").get(getDollarQuotes);

export default router;
